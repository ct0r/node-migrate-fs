# node-migrate-fs

[![Version](https://img.shields.io/npm/v/node-migrate-fs.svg?style=flat-square)](https://www.npmjs.com/package/node-migrate-fs)
[![Build](https://img.shields.io/circleci/project/github/ct0r/node-migrate-fs/master.svg?style=flat-square)](https://circleci.com/gh/ct0r/node-migrate-fs)
[![Coverage](https://img.shields.io/codeclimate/coverage/ct0r/node-migrate-fs.svg?style=flat-square)](https://codeclimate.com/github/ct0r/node-migrate-fs)
[![License](https://img.shields.io/github/license/ct0r/node-migrate-fs.svg?style=flat-square)](https://github.com/ct0r/node-migrate-fs/blob/master/LICENSE)

File system store for [node-migrate](https://github.com/ct0r/node-migrate).

## Installation

```
npm install node-migrate-fs
```

## Options

| Command line   | Programmatic | Description                                   |
| -------------- | ------------ | --------------------------------------------- |
| `--store-path` | path         | State file path. Default `migrations/.state`. |

## Usage

### Command line

```
node-migrate --store node-migrate-fs --store-path my/path/.state
```

### Programatic use

```js
const migrate = require('node-migrate');
const fsStore = require('node-migrate-fs');

const store = fsStore({
  path: 'my/path/.state'
});

migrate({ store });
```


