// const { message, danger } = require("danger");
const pr = danger.github.pr;

module.exports = () => {

	// PRs should have at least a sentence of description
	if (pr.body.length === 0) {
		warn("Please add a description to your PR.");
	}

	// if (pr.author_association == "FIRST_TIME_CONTRIBUTOR") {
	// 	message(
	// 		"Hello, this is your first contribution. If you want, you can check out other issues and PRs to get up to date on our standards."
	// 	);
	// }

}