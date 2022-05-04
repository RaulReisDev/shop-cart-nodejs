const router = require("express").Router();
const { requiresAuth } = require('express-openid-connect');

// Import Auth Controller
const authController = require("../controllers/authController");

// Auth0
router.get("/", authController.auth0);

// login user
router.get("/profile", requiresAuth(), authController.profile);

module.exports = router;