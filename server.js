const path = require('path');
const gateway = require('express-gateway');

console.log('hi changee')

gateway()
  .load(path.join(__dirname, 'config'))
  .run({host: '::'});
