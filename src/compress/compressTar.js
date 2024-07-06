const tar = require("tar");

/**
 * Compresses files into a TAR archive.
 * @param {string[]} files - The files to compress.
 * @param {string} output - The output TAR file.
 */
function compressTar(files, output) {
    tar.c(
        {
            file: output,
        },
        files
    )
        .then(() => {
            console.log(`Created ${output}`);
        })
        .catch((err) => {
            console.error(`Error creating ${output}: ${err.message}`);
        });
}

module.exports = compressTar;
