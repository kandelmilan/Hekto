const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(port, () => console.log(`Server running at port ${port}`));
    })
    .catch((err) => {
        console.error("Database connection error:", err.message);
    });
