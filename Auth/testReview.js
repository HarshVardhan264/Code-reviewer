const { sendCodeForReview } = require("./services/reviewService");

async function test() {

    try {

        const result = await sendCodeForReview(`
            def divide(a, b):
                return a / b
        `);

        console.log(result);

    } catch (error) {

        console.error("Error:", error.message);

    }
}

test();
