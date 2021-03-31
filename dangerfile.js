const { message, danger, warn, markdown } = require("danger");

(() => {

	if (require("./src/early-silent-exit")() === true) return

	// markdown("## Danger PR Checks")
	
	require("./src/pr-metadata")()
	require("./src/prettier")()
	require("./src/libraries")()
	
	markdown(`If something looks wrong, please mention one of our members to check.`);
	
})()
