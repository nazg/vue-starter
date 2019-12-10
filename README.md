# VueApp

A high level overview of tools:

| Name                           | Purpose                                                     |
| ------------------------------ | ----------------------------------------------------------- |
| https://sass-lang.com          | CSS with superpowers                                        |
| https://tailwindcss.com        | Utility-first CSS framework                                 |
| https://babeljs.io             | language compiler/transpiler (ES2015 => browser-compatible) |
| https://eslint.org             | code linting                                                |
| https://jestjs.io              | unit testing                                                |
| https://webpack.js.org         | bundling                                                    |
| https://www.cypress.io         | e2e testing                                                 |
| https://www.typescriptlang.org | development language (emitting ES2015)                      |
| https://yarnpkg.com            | package manager                                             |

Tools under investigation

| Name                                                | Purpose                                           |
| --------------------------------------------------- | ------------------------------------------------- |
| http://commitizen.github.io/cz-cli                  | commit convention                                 |
| https://github.com/conventional-changelog           | changelogs and release notes from commit messages |
| https://github.com/typicode/husky                   | git hooks                                         |
| https://github.com/yyx990803/yorkie                 | git hooks                                         |
| https://lerna.js.org                                | monorepo management                               |
| https://prettier.io                                 | opinionated code formatter                        |
| https://rollupjs.org                                | bundling                                          |
| https://github.com/adamwathan/theming-tailwind-demo | Tailwind CSS for Themeable Interfaces             |

## How to use

Some instructions are specific for , so be sure that you understand what you are doing.

```sh
git clone https://github.com/nazg/vue-starter
brew install nodeenv yarn
nodenv install $(cat vue-starter/.node-version)
npm install -g @vue/cli
cd vue-starter
yarn install
```

### Available commands, similar to any @vue/cli based projects

```sh
# compiles and minifies for production
yarn build

# lints and fixes(in some cases) files
yarn lint
yarn lint --no-fix
yarn lint --no-fix --format stylish

# compiles and hot-reloads for development
yarn serve

# run end-to-end tests
yarn test:e2e

# run unit tests
yarn test:unit
```

## Contribution Guide

- [src/types](https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins)

## Contribution Guide

### Issue Reporting Guidelines

`TODO`

### Pull Request Guidelines

- Checkout a topic branch from a base branch, e.g. `master`, and merge back against that branch.

- If adding a new feature:

  - Add accompanying test case.
  - Provide a convincing reason to add this feature.

- If fixing bug:

  - If you are resolving a special issue, add `(fix #xxx[,#xxx])` (#xxxx is the issue id) in your PR title.
  - Provide a detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.

- Make sure tests pass!

- Commit messages must follow the given convention.

- Make sure lint pass!

### Git Commit Message Convention

`TODO`
