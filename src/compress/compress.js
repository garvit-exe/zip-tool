const compressZip = require("./compressZip");
const compressTar = require("./compressTar");
const path = require("path");

/**
 * Compresses files based on the file extension.
 * @param {string[]} files - The files to compress.
 * @param {string} output - The output archive file.
 */
function compressFiles(files, output) {
    const ext = path.extname(output).toLowerCase();
    switch (ext) {
        case ".zip":
            compressZip(files, output);
            break;
        case ".tar":
            compressTar(files, output);
            break;
        default:
            console.error("Unsupported format. Use .zip or .tar.");
    }
}

module.exports = compressFiles;
