#!/usr/bin/env node

const { Command } = require("commander");
const compressFiles = require("./src/compress/compress");
const extractFiles = require("./src/extract/extract");

const program = new Command();

program
    .name("zip-tool")
    .description("A CLI tool to zip and unzip files")
    .version("1.0.0");

program
    .option("-c, --compress", "Compress files")
    .option("-e, --extract", "Extract files")
    .arguments("<output> <files...>")
    .action((output, files, cmdObj) => {
        if (cmdObj.compress) {
            compressFiles(files, output);
        } else if (cmdObj.extract) {
            const [archive, outputDir] = [output, files[0]];
            extractFiles(archive, outputDir);
        } else {
            console.error("Specify either -c (compress) or -e (extract).");
        }
    });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.outputHelp();
}
