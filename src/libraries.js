// const { message, danger, warn, markdown } = require("danger");

module.exports = () => {

	const modified = danger.git.modified_files;

	const modifiedLibFiles = modified.filter((p) => p.includes("libraries/"));

	if (modifiedLibFiles > 0) {
		if (
			!modifiedLibFiles.includes("libraries/CREDITS.md") ||
			!modifiedLibFiles.includes("libraries/license-info.json")
		) {
			warn("There are library changes, but CREDITS.md or license-info.json is left unchanged. Confirm if they need changing.");
			markdown("## Libraries changed")
			markdown(modifiedLibFiles.map(file => `- ${file}`).join("\n"))
		}
	}
	
}