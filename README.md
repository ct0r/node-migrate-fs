# node-migrate-fs

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


