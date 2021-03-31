// const { message, danger, warn, markdown } = require("danger");
const path = require("path")
const prettier = require("prettier")
const multimatch = require("multimatch")
const fs = require("fs")

module.exports = () => {

	const pr = danger.github.pr;
	const modified = danger.git.modified_files;
	const configFile = fs.readFileSync("./.prettierrc.json", { encoding: "utf-8" })
	const ignoreFile = fs.readFileSync("./.prettierignore", { encoding: "utf-8" })
	const config = JSON.parse(configFile)
	const ignoreList = ignoreFile.split(/\r?\n/g)

	// Check all files for Prettier
	let badFiles = [];
	for (var file of modified) {
		if (multimatch(modified, ignoreList).length === 1) return
		resolved = path.resolve(file);
		let readFile = fs.readFileSync(resolved, { encoding: "utf8", flag: "r" });
		let info = prettier.getFileInfo.sync(resolved);
		if (info.ignored) return;
		const extname = path.extname(file);
		const filePath = path.basename(file, extname);
		if (extname == ".svg") return;
		let check = prettier.check(readFile, { 
			filepath: filePath + extname,
			...config
		});
		if (!check) badFiles.push(file);
	}

	if (badFiles.length > 0) {
		warn(
			`${badFiles.length} need to be formatted with Prettier. Please format your code using Prettier, or go <a href="https://github.com/${pr.user}/ScratchAddons/actions">here</a> to enable formatting automation.`
		);
		markdown("")
		markdown("## Files needed formatting")
		markdown("")
		badFiles.forEach(badFile => {
			markdown(`- ${badFile}`)
		})
	}

}