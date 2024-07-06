const extractZip = require("./extractZip");
const extractTar = require("./extractTar");
const path = require("path");
const fs = require("fs");

/**
 * Extracts files based on the file extension.
 * @param {string} file - The file to extract.
 * @param {string} outputDir - The output directory for extraction.
 */
function extractFiles(file, outputDir) {
    if (!fs.existsSync(file)) {
        console.error(`File ${file} not found.`);
        return;
    }

    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);
    const extractionPath = path.join(outputDir, baseName);

    if (!fs.existsSync(extractionPath)) {
        fs.mkdirSync(extractionPath, { recursive: true });
    }

    switch (ext) {
        case ".zip":
            extractZip(file, extractionPath);
            break;
        case ".tar":
            extractTar(file, extractionPath);
            break;
        default:
            console.error("Unsupported format. Use .zip or .tar.");
    }
}

module.exports = extractFiles;
