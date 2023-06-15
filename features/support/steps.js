const { Given, Then, When } = require("@cucumber/cucumber");
const chai = require("chai");

const Turnstile = require("../../src/Turnstile");

chai.should();

Given("a locked turnstile", function () {
	this.lockedTurnstile = new Turnstile();
});

Given("an unlocked turnstile", function () {
	this.unlockedTurnstile = new Turnstile("Unlocked");
});

When("trying to push through the locked turnstile", function () {
	this.output = this.lockedTurnstile.interact("Pass through the arm.");
});

When("after pushing through the unlocked turnstile", function () {
	this.output = this.unlockedTurnstile.interact("Pass through the arm.");
});

When("putting a coin in the slot of the locked turnstile", function () {
	this.output = this.lockedTurnstile.interact("Put a coin in the slot.");
});

When("putting a coin in the slot of the unlocked turnstile", function () {
	this.output = this.unlockedTurnstile.interact("Put a coin in the slot.");
});

Then("nothing should happen", function () {
	this.output.should.be.equal("Nothing happened.");
});

Then("the turnstile should lock", function () {
	this.output.should.be.equal("The turnstile is now locked.");
});

Then("the turnstile should unlock", function () {
	this.output.should.be.equal("The turnstile unlocks.");
});
