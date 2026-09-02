const allowedExtensions = [
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".py",
  ".java",
  ".cpp",
  ".c",
  ".cs",
  ".go",
  ".rb",
  ".php",
];

const ignoredFolders = [
  "node_modules",
  ".git",
  "dist",
  "build",
  ".next",
  "venv",
  ".venv",
  "coverage",
  "__tests__",
  "test",
  "tests",
];

const ignoredFiles = ["package-lock.json", "yarn.lock", "pnpm-lock.yaml"];

function filterCodeFiles(files) {
  return files.filter((file) => {
    // Only actual files
    if (file.type !== "blob") {
      return false;
    }

    // Ignore unwanted folders
    const parts = file.path.split("/");

    const isIgnoredFolder = ignoredFolders.some((folder) =>
      parts.includes(folder),
    );

    if (isIgnoredFolder) {
      return false;
    }

    // Ignore specific files
    if (ignoredFiles.includes(file.path)) {
      return false;
    }

    // Only source-code files
    const isCodeFile = allowedExtensions.some((extension) =>
      file.path.endsWith(extension),
    );

    if (!isCodeFile) {
      return false;
    }

    // Ignore very large files
    if (file.size > 100000) {
      return false;
    }

    return true;
  });
}

module.exports = {
  filterCodeFiles,
};
