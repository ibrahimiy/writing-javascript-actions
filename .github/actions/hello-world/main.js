const core = require("@actions/core");

const firstgreeting = core.getInput("first-greeting");
const secondgreeting = core.getInput("second-greeting");
const thirdgreeting = core.getInput("third-greeting");

console.log(`Hello ${firstgreeting}`);
console.log(`Hello ${secondgreeting}`);
if(thirdgreeting) {
    console.log(`Hello ${thirdgreeting}`);
}