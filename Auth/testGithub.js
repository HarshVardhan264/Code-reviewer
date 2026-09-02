const {
  getRepositoryFiles,
  getFileContent,
} = require("./services/githubService");

const { filterCodeFiles } = require("./services/fileFilter");
const { selectFiles } = require("./services/fileSelector");

async function test() {
  try {
    const repoUrl = "https://github.com/facebook/react";

    // Step 1: Get all repository files
    const files = await getRepositoryFiles(repoUrl);

    // Step 2: Filter source files
    const codeFiles = filterCodeFiles(files);

    // Step 3: Select only 30
    const selectedFiles = selectFiles(codeFiles, 30);

    console.log("Total files:", files.length);
    console.log("Code files:", codeFiles.length);
    const codeData = [];

    for (const file of selectedFiles) {
      try {
        const code = await getFileContent(repoUrl, file.path);

        codeData.push({
          path: file.path,
          code: code,
        });

        console.log(`Fetched: ${file.path}`);
      } catch (error) {
        console.log(`Failed: ${file.path}`);
      }
    }

    console.log("\nTotal code files fetched:", codeData.length);

    // Step 4: Get content of first file
    const firstFile = selectedFiles[0];

    console.log("\nReading:");
    console.log(firstFile.path);

    const code = await getFileContent(repoUrl, firstFile.path);

    console.log("\n========== CODE ==========\n");
    console.log(code);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

test();
