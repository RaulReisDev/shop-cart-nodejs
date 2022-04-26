const router = require("express").Router();

// Import Product Controller
const productController = require("../controllers/productsController");

// get all
router.get("/", productController.getAllProducts);

// login user
// router.post("/", authController.login);

module.exports = router;