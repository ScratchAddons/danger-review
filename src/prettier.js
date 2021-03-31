const { message, danger, warn, markdown } = require("danger");

module.exports = () => {

	const pr = danger.github.pr;
	const modified = danger.git.modified_files;

	// Check all files for Prettier
	let badFiles = [];
	for (var file of modified) {
		resolved = path.resolve(file);
		let readFile = fs.readFileSync(resolved, { encoding: "utf8", flag: "r" });
		let info = prettier.getFileInfo.sync(resolved);
		if (info.ignored) return;
		const extname = path.extname(file);
		const filePath = path.basename(file, extname);
		if (extname == ".svg") return;
		let check = prettier.check(readFile, { filepath: filePath + extname });
		if (!check) badFiles.push(file);
	}

	if (badFiles.length > 0) {
		warn(
			`${badFiles.length} need to be formatted with Prettier. Please format your code using Prettier, or go [here](https://github.com/${pr.user}/ScratchAddons/actions) to enable formatting automation.`
		);
		markdown("")
		markdown("### Files needed formatting")
		badFiles.forEach(badFile => {
			markdown(`- ${badFile}`)
		})
	}

}