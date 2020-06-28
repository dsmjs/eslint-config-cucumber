# eslint-config-cucumber

[Shareable config](https://eslint.org/docs/developer-guide/shareable-configs#shareable-configs)
for [ESLint](https://eslint.org) for [Cucumber.js](https://github.com/cucumber/cucumber-js) tests,
which extends [@form8ion/eslint-config-cucumber](https://github.com/form8ion/eslint-config-cucumber)

<!--status-badges start -->

[![Build Status][ci-badge]][ci-link]

<!--status-badges end -->

## Table of Contents

* [Usage](#usage)
  * [Installation](#installation)
  * [Add to the project config](#add-to-the-project-config)
* [Contributing](#contributing)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

## Usage

<!--consumer-badges start -->

[![MIT license][license-badge]][license-link]
[![npm][npm-badge]][npm-link]

<!--consumer-badges end -->

### Installation

```sh
$ npm install @dsmjs/eslint-config-cucumber --save-dev
```

### Add to the project config

Such as in an .eslintrc.yml

```yaml
extends:
  - '@dsmjs'
  - '@dsmjs/cucumber'
```

## Contributing

<!--contribution-badges start -->

[![PRs Welcome][PRs-badge]][PRs-link]
[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![Dependabot][dependabot-badge]][dependabot-link]

<!--contribution-badges end -->

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg

[dependabot-link]: https://dependabot.com/

[dependabot-badge]: https://badgen.net/dependabot/dsmjs/eslint-config-cucumber/?icon=dependabot

[ci-link]: https://travis-ci.com/dsmjs/eslint-config-cucumber

[ci-badge]: https://img.shields.io/travis/com/dsmjs/eslint-config-cucumber/master.svg

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/dsmjs/eslint-config-cucumber.svg

[npm-link]: https://www.npmjs.com/package/@dsmjs/eslint-config-cucumber

[npm-badge]: https://img.shields.io/npm/v/@dsmjs/eslint-config-cucumber.svg
