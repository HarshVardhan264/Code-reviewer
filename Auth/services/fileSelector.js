function selectFiles(files, limit = 10) {

    const priorityKeywords = [
        "auth",
        "controller",
        "service",
        "route",
        "api",
        "middleware",
        "model",
        "handler",
        "main",
        "app",
        "server",
        "index"
    ];

    function getScore(file) {

        const path = file.path.toLowerCase();

        let score = 0;

        // Files inside src are important
        if (path.split("/").includes("src")) {
            score += 5;
        }

        // Important folders/files
        for (const keyword of priorityKeywords) {
            if (path.includes(keyword)) {
                score += 3;
            }
        }

        // Avoid very deeply nested files
        const depth = path.split("/").length;

        if (depth <= 3) {
            score += 2;
        }

        return score;
    }

    const rankedFiles = files
        .map(file => ({
            ...file,
            score: getScore(file)
        }))
        .sort((a, b) => b.score - a.score);

    return rankedFiles
        .slice(0, limit)
        .map(file => ({
            path: file.path,
            type: file.type,
            size: file.size
        }));
}


module.exports = {
    selectFiles
};