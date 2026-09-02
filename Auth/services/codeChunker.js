function chunkCode(code, maxLines = 300) {
    const lines = code.split("\n");
    const chunks = [];

    for (let i = 0; i < lines.length; i += maxLines) {
        const chunk = lines.slice(i, i + maxLines).join("\n");

        chunks.push({
            startLine: i + 1,
            endLine: Math.min(i + maxLines, lines.length),
            code: chunk
        });
    }

    return chunks;
}

module.exports = {
    chunkCode
};