const os = require('os');
const path = require('path');
const Application = require('thinkjs');
const Loader = require('thinkjs/lib/loader');

const instance = new Application({
  ROOT_PATH: __dirname,
  APP_PATH: path.join(__dirname, 'src'),
  RUNTIME_PATH: path.join(os.tmpdir(), 'runtime'),
  proxy: true, // use proxy
  env: 'cloudbase'
});

exports.tcbGetApp = async () => {
  const loader = new Loader(instance.options);
  loader.loadAll('worker');

  await think.beforeStartServer().catch(err => think.logger.error(err));
  await instance._getWorkerInstance(instance.parseArgv());
  think.app.emit('appReady');

  return think.app;
}