/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');
const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();
const ora = require('ora');
const morgan = require('morgan');
const stormpath = require('express-stormpath-ugroopextension');

const spinner = ora({
  interval: 100,
});

function failAndExit(err) {
  spinner.fail();
  console.error(err.stack);
  process.exit(1);
}

app.use(morgan('combined'));

app.use(stormpath.init(app, {
  // Disable logging until startup, so that we can catch errors
  // and display them nicely.
  debug: 'info',
  web: {
    produces: ['application/json'],
    me: {
      expand: {
        customData: true,
        directory: true,
        groups: true,
      },
    },
    register: {
      enabled: false,
    },
    userOrgSignUp: {
      enabled: true,
      defaultRoleGroup: 'Tour Admin',
    },
  },
}));

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended port number, use port 3000 if not provided
const port = argv.port || process.env.PORT || 3000;
spinner.text = `Starting Dev Sever on port ${port}`;
spinner.start();

app.on('error', failAndExit);
app.on('stormpath.error', failAndExit);

// Start your app.
app.listen(port, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, url);
    });
  } else {
    logger.appStarted(port);
  }
  spinner.succeed();
  spinner.text = 'Initializing Stormpath';
  spinner.start();
  app.on('stormpath.ready', () => {
    spinner.succeed();
    // Now bring back error logging.
    app.get('stormpathLogger').transports.console.level = 'error';
  });
});
