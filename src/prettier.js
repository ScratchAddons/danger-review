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
		const extname = path.extname(file);
		const filePath = path.basename(file, extname);
		let check = prettier.check(readFile, {
			filepath: filePath + extname,
			...config
		});
		if (!check) badFiles.push(file);

	}

	if (badFiles.length > 0) {
		// TODO: Verify if the Actions URL is right. If not, use `base` instead of `head`.
		warn(
			`${badFiles.length} file${badFiles.length === 1 ? "" : "s"} need${badFiles.length === 1 ? "s" : ""} to be formatted.`
		);
		markdown("## Files needed formatting")
		markdown(`${badFiles.length === 1 ? "This file needs" : "These files need"} to be formatted. Please format your code using Prettier, or click <a href="${pr.head.repo.html_url}/actions">here</a> to enable formatting automation.`)
		markdown(badFiles.map(file => `- ${file}`).join("\n"))
	}

}