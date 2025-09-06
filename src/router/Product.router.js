const express = require("express");
const router = express.Router();
const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require("../controller/Product.controller");

// CRUD routes
router.post("/product", createProduct);           
router.get("/product", getProducts);            
router.get("/product/:id", getProductById);      
router.patch("/product/:id", updateProduct);    
router.delete("/product/:id", deleteProduct);   

module.exports = router;
