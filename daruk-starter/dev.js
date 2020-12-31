const execa = require('execa');

async function start() {
  await execa('npm', [
    'run',
    'serve:dev'
  ], {
    stdio: 'inherit',
  });
}

start();
