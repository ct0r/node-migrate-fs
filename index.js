const fs = require('fs');

module.exports = ({ path = 'migrations/.state' }) => {
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
    path: args['--store-path']
  })
};
