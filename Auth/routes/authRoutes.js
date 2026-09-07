const express = require("express");

const {
    signup,
    login,
    getMe,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Signup
router.post("/signup", signup);

// Login
router.post("/login", login);

// Get currently logged-in user
router.get("/me", protect, getMe);

module.exports = router;