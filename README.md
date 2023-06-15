# Project js-mealy-machine

## About

A basic implementation of a _Mealy machine_ in JavaScript.

The main goal was to practice:
- JSDoc as a type system
- Gherkin syntax for BDD tests

## How to run

- Install the dependencies with `pnpm install`.
- Define your machine (see `Turnstile.ts` and `features/support/steps.ts` for an example on how to do define and use it).
- Load your machine in the `src/index.ts` file.
- Run `pnpm start` and interact with your machine (you can stop the running process in your terminal with `Ctrl + c`).
