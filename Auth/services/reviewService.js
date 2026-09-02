const axios = require("axios");


async function sendCodeForReview(chunks) {

    const response = await axios.post(
        "http://127.0.0.1:8000/review",
        {
            chunks: chunks
        }
    );

    return response.data;
}


module.exports = {
    sendCodeForReview
};