const path = require('path');
const gateway = require('express-gateway');
const morgan = require('morgan');

const logger = morgan('combined', { stream: process.stdout });

gateway()
  .load(path.join(__dirname, 'config'))
  .run({
    host: '0.0.0.0',
    pre: (app) => {
      app.use(logger);
    }
  });
