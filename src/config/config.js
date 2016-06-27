// www.andrewsouthpaw.com/2015/02/08/environment-variables/
import nconf from 'nconf';

// Use less-terrible separator character, stackoverflow.com/questions/25017495
nconf.env('__');

// For local development, we can override defaults easily. Rename
// src/common/_config.json to src/common/config.json and uncomment next line.
// nconf.file('src/common/config.json');

// Remember, never put secrets in the source code. Use environment variables for
// production or src/common/config.json for development instead.
nconf.defaults({
  appName: require('../../package.json').name,
  appVersion: process.env.appVersion,
  isProduction: process.env.NODE_ENV === 'production',
  sentryUrl: '',
});

export default nconf.get();
