/** @template {string} State; @template {string} Input; @template {string} Output */
class MealyMachine {
	#state;
	#transitionFn;
	#outputFn;

	/**
	 * @param {State} initialState,
	 * @param {(s: State, i: Input) => State}  transitionFn,
	 * @param {(s: State, i: Input) => Output}  outputFn,
	 */
	constructor(initialState, transitionFn, outputFn) {
		this.#state = initialState;
		this.#transitionFn = transitionFn;
		this.#outputFn = outputFn;
	}

	next(/** @type {Input} */ i) {
		const output = this.#outputFn(this.#state, i);
		this.#state = this.#transitionFn(this.#state, i);
		return output;
	}
}

module.exports = MealyMachine;
