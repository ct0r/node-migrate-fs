const fs = require('fs');

module.exports = ({ file: path }) => {
  return {
    get() {
      try {
        return JSON.parse(fs.readFileSync(path, { encoding: 'utf8' }));
      } catch (err) {
        if (err.code === 'ENOENT') return null;
        throw err;
      }
    },
    set(state) {
      fs.writeFileSync(path, JSON.stringify(state));
    }
  };
};

module.exports.cli = {
  spec: {
    '--store-path': String
  },
  getOptions: args => ({
    file: args['--store-path']
  })
};
