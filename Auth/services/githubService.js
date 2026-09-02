const axios = require("axios");

function getRepoInfo(repoUrl) {
    const url = new URL(repoUrl);

    const parts = url.pathname.split("/").filter(Boolean);

    if (parts.length < 2) {
        throw new Error("Invalid GitHub repository URL");
    }

    return {
        owner: parts[0],
        repo: parts[1]
    };
}

async function getRepositoryFiles(repoUrl) {
    const { owner, repo } = getRepoInfo(repoUrl);

    const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/git/trees/HEAD?recursive=1`
    );

    return response.data.tree;
}


async function getFileContent(repoUrl, filePath) {
    const { owner, repo } = getRepoInfo(repoUrl);

    const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`
    );

    const content = response.data.content;

    // GitHub returns Base64 encoded content
    const decodedContent = Buffer.from(content, "base64").toString("utf-8");

    return decodedContent;
}


module.exports = {
    getRepositoryFiles,
    getFileContent
};