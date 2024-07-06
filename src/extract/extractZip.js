const unzipper = require("unzipper");
const fs = require("fs");

/**
 * Extracts a ZIP file.
 * @param {string} zipFile - The ZIP file to extract.
 * @param {string} extractionPath - The directory to extract the files to.
 */
function extractZip(zipFile, extractionPath) {
    fs.createReadStream(zipFile)
        .pipe(unzipper.Extract({ path: extractionPath }))
        .on("close", () => {
            console.log(`Extracted ${zipFile} to ${extractionPath}`);
        })
        .on("error", (err) => {
            console.error(`Error extracting ${zipFile}: ${err.message}`);
        });
}

module.exports = extractZip;
