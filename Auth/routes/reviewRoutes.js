const express = require("express");

const {
    reviewRepository
} = require("../controllers/reviewController");

const router = express.Router();

router.post("/review", reviewRepository);

module.exports = router;