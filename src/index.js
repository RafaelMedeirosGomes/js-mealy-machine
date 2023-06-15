const Turnstile = require("./Turnstile");

function main() {
	const turnstile = new Turnstile();
	console.log("*Pass through the arm.*");
	console.log(turnstile.interact("Pass through the arm."));
	console.log("*Put a coin in the slot.*");
	console.log(turnstile.interact("Put a coin in the slot."));
	console.log("*Pass through the arm.*");
	console.log(turnstile.interact("Pass through the arm."));
}

main();
