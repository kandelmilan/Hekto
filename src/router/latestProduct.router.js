const express = require("express");
const upload = require("../utils/multer");
const { checkFile } = require("../middleware/checkFile");
const { isAdmin } = require("../middleware/auth");

const router = express.Router();

// Get all latest products
router.get("/", (req, res) => {
  res.send("Get all latest products details ");
});

// Create new latest product
router.post("/", upload.single("image"), checkFile, (req, res) => {
  res.send("Create a new latest product");
});

// Update latest product by ID
router.patch("/:id", upload.single("image"), checkFile, (req, res) => {
  res.send(`Update latest product with ID: ${req.params.id}`);
});

// Delete latest product by ID (only admin)
// router.delete("/:id", isAdmin, (req, res) => {
//   res.send(`Delete latest product with ID: ${req.params.id}`);
// });

module.exports = router;
