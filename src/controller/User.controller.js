const User = require("../model/User.model")
const Joi = require("joi")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const SignupSchema = Joi.object({
    fullname: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            "string.empty": "Username is required",
            "string.min": "Username must be at least 3 characters",
            "string.max": "Username cannot be longer than 30 characters"
        }),
    PhoneNumber: Joi.string()
        .required()
        .messages({
            "string.pattern.base": "Phone number must be exactly 10 digits",
            "string.empty": "Phone number is required"
        }),
    age: Joi.number()
        .min(0)
        .max(120)
        .required()
        .messages({
            "number.base": "Age must be a number",
            "number.min": "Age cannot be negative",
            "number.max": "Age seems too high",
            "any.required": "Age is required"
        }),
    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.email": "Please enter a valid email address",
            "string.email": "Please enter a valid email address",
            "string.empty": "Email is required"
        }),
    password: Joi.string()
        .min(6)
        .max(100)
        .required()
        .messages({
            "string.empty": "Password is required",
            "string.min": "Password must be at least 6 characters",
        }),
})


const loginSchema = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.email": "Please enter a valid email address",
            "string.empty": "Email is required"
        }),

    password: Joi.string()
        .min(6)
        .max(100)
        .required()
        .messages({
            "string.empty": "Password is required",
            "string.min": "Password must be at least 6 characters",
        }),
})
const login = async (req, res) => {
    try {
        const { error, value } = loginSchema.validate(req.body);
        if (error) {
            return res.status(400).send({ message: "Validation failed", details: error.details });
        }

        const user = await User.findOne({ email: value.email });
        if (!user) {
            return res.status(401).send({ message: "Email not found" });
        }

        const matched = await bcrypt.compare(value.password, user.password);
        if (!matched) {
            return res.status(401).json({ message: "Wrong password" });
        }

        const userObject = user.toObject();
        delete userObject.password;

        const token = jwt.sign(userObject, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).send({ status: "success", message: "User logged in successfully", data: { token, userObject } });

    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }
};

const signup = async (req, res) => {
    console.log("Request body:", req.body);
    try {
        const { error, value } = SignupSchema.validate(req.body);
        if (error) {
            return res.status(400).send({ error: error.details });
        }

        // Hash password
        const saltRounds = 10;
        const hash = bcrypt.hashSync(value.password, saltRounds);

        // Save user
        const user = await User.create({ ...value, password: hash });

        const userObject = user.toObject();
        delete userObject.password;

        return res.status(201).send({ message: "User created", user: userObject });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: "Internal server error" });
    }
};


module.exports = {
    signup, login
}