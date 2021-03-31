const { message, danger, warn, markdown } = require("danger");

export default () => {

	const pr = danger.github.pr;
	const modified = danger.git.modified_files;

	const modifiedLibFiles = modified.filter((p) => p.includes("libraries/"));

	if (modifiedLibFiles.includes("libraries/")) {
		if (
			!modifiedLibFiles.includes("libraries/CREDITS.md") ||
			!modifiedLibFiles.includes("libraries/license-info.json")
		) {
			warn("There are library changes, but you didn't change CREDITS.md or license-info.json. Do they need changing?");
		}
	}
	
}