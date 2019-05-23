const fs = require('fs');
const crypto = require('crypto');

const arg = require('arg');
const test = require('ava');

const fsStore = require('.');

const getPath = () => `test-${crypto.randomBytes(5).toString('hex')}`;

test('set saves files to db', async t => {
  const path = getPath();
  const store = fsStore({ path });
  const state = ['migration-1', 'migration-2'];

  await store.set(state);

  const data = fs.readFileSync(path, { encoding: 'utf8' });

  fs.unlinkSync(path);

  t.deepEqual(data, JSON.stringify(state));
});

test('get returns files from db', async t => {
  const path = getPath();
  const store = fsStore({ path });
  const data = JSON.stringify(['migration-1', 'migration-2']);

  fs.writeFileSync(path, data);

  const state = await store.get();

  fs.unlinkSync(path);

  t.deepEqual(state, JSON.parse(data));
});

test('getOptions returns options', t => {
  const { spec, getOptions } = fsStore.cli;

  const args = arg(spec, {
    argv: ['--store-path', 'test-path']
  });

  const options = getOptions(args);

  t.deepEqual(options, {
    path: 'test-path'
  });
});
