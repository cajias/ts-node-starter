```
 _                       _            _            _
| |_ ______ _ _  ___  __| |___ ___ __| |_ __ _ _ _| |_ ___ _ _
|  _(_-<___| ' \/ _ \/ _` / -_)___(_-<  _/ _` | '_|  _/ -_) '_|
 \__/__/   |_||_\___/\__,_\___|   /__/\__\__,_|_|  \__\___|_|
```

<p align="center">
  <strong>A batteries-included TypeScript + Node.js starter — strict types, tested, linted, and CI-ready out of the box.</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/cajias/ts-node-starter" alt="License"></a>
  <img src="https://img.shields.io/github/languages/top/cajias/ts-node-starter" alt="Top language">
  <img src="https://img.shields.io/github/last-commit/cajias/ts-node-starter" alt="Last commit">
  <img src="https://github.com/cajias/ts-node-starter/actions/workflows/ci.yaml/badge.svg" alt="CI">
  <img src="https://img.shields.io/badge/TypeScript-4.7-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Yarn-3.2.2-2C8EBB?logo=yarn&logoColor=white" alt="Yarn Berry">
</p>

`ts-node-starter` is an opinionated scaffold for new TypeScript Node.js projects. Clone it and you
start from a green build: strict compiler settings, a Jest test runner wired through `ts-jest`,
ESLint + Prettier enforced on every commit via Husky, and a GitHub Actions pipeline already in
place. No boilerplate hunt, no tooling debate — just write code.

## ✨ Features

- **Strict TypeScript** — compiles with `tsc` against a tuned `tsconfig.json`.
- **Tested by default** — [Jest](https://jestjs.io) via `ts-jest`; test files are matched by the `.test.ts` extension.
- **100% coverage gates** — branches, functions, lines, and statements all thresholded at 100%, with [auto-bumping](https://www.npmjs.com/package/jest-coverage-thresholds-bumper) so the bar ratchets up as coverage grows.
- **Lint & format on commit** — ESLint and Prettier run through [`lint-staged`](https://github.com/okonet/lint-staged) on a [Husky](https://typicode.github.io/husky/) pre-commit hook.
- **Yarn Berry (3.2.2)** — pinned and committed; includes the `interactive-tools` plugin for `yarn upgrade-interactive`.
- **CI ready** — a [GitHub Actions](https://github.com/cajias/ts-node-starter/actions) workflow installs, lints, tests with coverage, and publishes coverage badges to GitHub Pages on `main`.

## 🚀 Installation

Requires [Node.js](https://nodejs.org) and [Yarn Berry](https://yarnpkg.com). The Yarn release is
committed to the repo, so `yarn` resolves to `3.2.2` automatically.

```bash
git clone https://github.com/cajias/ts-node-starter.git
cd ts-node-starter
yarn install
```

## 🛠️ Usage

Run the entrypoint (`src/index.ts`) directly with `ts-node`:

```bash
yarn start
# -> Hello World
```

The starter ships a tiny example module you can replace with your own code:

```ts
import { calculator } from "./index";

calculator(1, 2); // => 3
```

## 📁 Project Structure

```
ts-node-starter/
├── src/
│   ├── index.ts          # Entrypoint — logs "Hello World", exports calculator()
│   └── index.test.ts     # Jest tests for the example module
├── .github/
│   └── workflows/
│       └── ci.yaml        # GitHub Actions: install · lint · test · coverage badges
├── .husky/
│   └── pre-commit         # Runs lint-staged before each commit
├── .yarn/                 # Pinned Yarn Berry release + plugins
├── package.json           # Scripts, deps, Jest/ESLint/lint-staged config
├── tsconfig.json          # Strict TypeScript compiler options
└── yarn.lock              # Locked dependency graph
```

## 🧪 Development

| Task                       | Command       |
| -------------------------- | ------------- |
| Run the entrypoint         | `yarn start`  |
| Lint                       | `yarn lint`   |
| Type-check / build         | `yarn build`  |
| Lint + type-check + test   | `yarn test`   |

`yarn build` runs the TypeScript compiler (`tsc`), emitting to `dist/`. `yarn test` runs the full
pre-flight (`lint` + `tsc`) before executing the Jest suite, mirroring what CI enforces.

## 🤝 Contributing

Contributions are welcome. Fork the repo, create a feature branch, and open a pull request. The
pre-commit hook keeps lint and formatting consistent; please make sure `yarn test` passes before
submitting.

## 📄 License

Released under the [MIT License](LICENSE). © 2026 Raul Cajias.
