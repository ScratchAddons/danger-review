const { danger } = require("danger");
const pr = danger.github.pr;

module.exports = () => {

	if (pr.title.includes("Translation update:")) return true

}