const path = require('path');
const gateway = require('express-gateway');

console.log('hi change1e in main')

gateway()
  .load(path.join(__dirname, 'config'))
  .run({host: '::'});
