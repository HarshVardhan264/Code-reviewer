const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        repoUrl: {
            type: String,
            required: true,
            trim: true,
        },

        result: {
            type: mongoose.Schema.Types.Mixed,
            required: true,
        },

        status: {
            type: String,
            enum: ["completed", "failed"],
            default: "completed",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Review", reviewSchema);