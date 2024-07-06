const tar = require("tar");

/**
 * Extracts a TAR file.
 * @param {string} tarFile - The TAR file to extract.
 * @param {string} extractionPath - The directory to extract the files to.
 */
function extractTar(tarFile, extractionPath) {
    tar.x({
        file: tarFile,
        cwd: extractionPath,
        strip: 1, // Remove the first directory level
    })
        .then(() => {
            console.log(`Extracted ${tarFile} to ${extractionPath}`);
        })
        .catch((err) => {
            console.error(`Error extracting ${tarFile}: ${err.message}`);
        });
}

module.exports = extractTar;
