const fs = require('fs');

fs.copyFile('package.json', './functions/app/package.json', err => {
  if (err) throw err;
});

fs.copyFile('package-lock.json', './functions/app/package-lock.json', err => {
  if (err) throw err;
});
