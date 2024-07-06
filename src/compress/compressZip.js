const fs = require("fs");
const archiver = require("archiver");
const path = require("path");

/**
 * Compresses files into a ZIP archive.
 * @param {string[]} files - The files to compress.
 * @param {string} output - The output ZIP file.
 */
function compressZip(files, output) {
    const outputZip = fs.createWriteStream(output);
    const archive = archiver("zip", {
        zlib: { level: 9 }, // Sets the compression level.
    });

    outputZip.on("close", () => {
        console.log(`Created ${output}`);
    });

    archive.pipe(outputZip);

    files.forEach((file) => {
        archive.file(file, { name: path.basename(file) });
    });

    archive.finalize();
}

module.exports = compressZip;
