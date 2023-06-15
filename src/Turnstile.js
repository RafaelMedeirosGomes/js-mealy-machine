const MealyMachine = require("./MealyMachine");

/** @typedef {string | number | symbol} RecordKey */
/**
 * @template {RecordKey} Row; @template {RecordKey} Col; @template {unknown} Value
 * @typedef {Record<Row,Record<Col, Value>>} Table
 */

// https://en.wikipedia.org/wiki/Finite-state_machine#Example:_coin-operated_turnstile
/** @typedef {"Locked" | "Unlocked"} State */
/** @typedef {"Coin" | "Push"} Input */
/** @typedef {"Nothing happened." | "The turnstile unlocks."| "The turnstile is now locked."} Output */

class Turnstile {
	/** @type {MealyMachine<State, Input, Output>}*/
	#machinery;

	/** @type {Table<State, Input, State>} */ static #transitionTable = {
		Locked: {
			Coin: "Unlocked",
			Push: "Locked",
		},
		Unlocked: {
			Coin: "Unlocked",
			Push: "Locked",
		},
	};

	/** @type {Table<State, Input, Output>} */ static #outputTable = {
		Locked: {
			Coin: "The turnstile unlocks.",
			Push: "Nothing happened.",
		},
		Unlocked: {
			Coin: "Nothing happened.",
			Push: "The turnstile is now locked.",
		},
	};

	constructor(/** @type {State} */ initialState = "Locked") {
		this.#machinery = new MealyMachine(
			initialState,
			(s, i) => Turnstile.#transitionTable[s][i],
			(s, i) => Turnstile.#outputTable[s][i],
		);
	}

	interact(
		/** @type {"Put a coin in the slot." | "Pass through the arm."} */ action,
	) {
		if (action === "Put a coin in the slot.") {
			return this.#machinery.next("Coin");
		}
		return this.#machinery.next("Push");
	}
}

module.exports = Turnstile;
