import config from './config';

export default function createInitialState() {
  return {
    config: {
      appName: config.appName,
      appVersion: config.appVersion,
      sentryUrl: config.sentryUrl
    }
  };
}
