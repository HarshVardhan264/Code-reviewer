const {
    getRepositoryFiles,
    getFileContent
} = require("../services/githubService");

const { filterCodeFiles } = require("../services/fileFilter");
const { selectFiles } = require("../services/fileSelector");
const { sendCodeForReview } = require("../services/reviewService");
const { chunkCode } = require("../services/codeChunker");


async function reviewRepository(req, res) {

    try {

        const { repoUrl } = req.body;


        // Validate URL

        if (!repoUrl) {

            return res.status(400).json({
                error: "GitHub repository URL is required"
            });

        }


        // Get repository files

        console.log("Fetching repository files...");

        const files = await getRepositoryFiles(repoUrl);

        console.log(
            `Total files found: ${files.length}`
        );


        // Filter source files

        const codeFiles = filterCodeFiles(files);

        console.log(
            `Code files found: ${codeFiles.length}`
        );


        // Select files

        const selectedFiles = selectFiles(
            codeFiles,
            10
        );

        console.log(
    `Files selected: ${selectedFiles.length}`
);

console.log(
    "Selected files:"
);

selectedFiles.forEach((file) => {
    console.log(`- ${file.path}`);
});


        // Fetch code

        const codeData = [];


        for (const file of selectedFiles) {

            try {

                console.log(
                    `Fetching: ${file.path}`
                );

                const code = await getFileContent(
                    repoUrl,
                    file.path
                );


                codeData.push({
                    path: file.path,
                    code: code
                });


            } catch (error) {

                console.log(
                    `Failed to fetch: ${file.path}`
                );

            }
        }


        // Create chunks

        const allChunks = [];


        for (const file of codeData) {

            const chunks = chunkCode(
                file.code,
                300
            );


            console.log(
                `${file.path} → ${chunks.length} chunk(s)`
            );


            for (const chunk of chunks) {

                allChunks.push({

                    filePath: file.path,

                    startLine: chunk.startLine,

                    endLine: chunk.endLine,

                    code: chunk.code

                });

            }
        }


        console.log(
            `Total chunks: ${allChunks.length}`
        );


        // Send chunks to Python

        console.log(
            "Sending repository to AI..."
        );


        const reviewResult = await sendCodeForReview(
            allChunks
        );


        // Return structured report

        res.json({

            success: true,

            repository: repoUrl,

            filesFound: files.length,

            codeFilesFound: codeFiles.length,

            filesReviewed: codeData.length,

            chunksReviewed: allChunks.length,

            report: reviewResult.report

        });


    } catch (error) {

        console.error(
            "Repository review error:",
            error
        );


        res.status(500).json({

            success: false,

            error: "Failed to review repository",

            message: error.message

        });

    }
}


module.exports = {
    reviewRepository
};