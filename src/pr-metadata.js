const { message, danger } = require("danger");
const pr = danger.github.pr;

export default () => {

	// PRs should have at least a sentence of description
	if (pr.body.length === 0) {
		fail("Please add a description to your PR.");
	}

	var path = require("path");
	if (pr.author_association == "FIRST_TIME_CONTRIBUTOR") {
		message(
			"Hello, this is your first contribution. If you want, you can check out other issues and PRs to get up to date on our standards."
		);
	}

}