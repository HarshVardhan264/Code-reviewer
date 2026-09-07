const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
    createReview,
    getReviewHistory,
    getReviewById,
} = require("../controllers/reviewController");

const router = express.Router();

// Create a new repository review
router.post("/", protect, createReview);

// Get previous reviews
router.get("/history", protect, getReviewHistory);

// Get a single previous review
router.get("/:id", protect, getReviewById);

module.exports = router;