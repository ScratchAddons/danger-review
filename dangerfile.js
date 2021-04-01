const { message, danger, warn, markdown } = require("danger");

(() => {

	if (require("./src/early-silent-exit")() === true) return

	// markdown("## Danger PR Checks")
	
	console.log("./src/pr-metadata")
	require("./src/pr-metadata")()
	console.log("./src/prettier")
	require("./src/prettier")()
	console.log("./src/libraries")
	require("./src/libraries")()
	
	markdown(`If something looks wrong, please mention one of our members to check.`);
	
})()
