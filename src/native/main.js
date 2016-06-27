import App from './app/App.react';
import Component from 'react-pure-render/component';
import React from 'react';
import configureStore from '../common/configureStore';
import initialState from './initialState';
import { AppRegistry, Platform } from 'react-native';
import { Provider } from 'react-redux';

const createNativeInitialState = () => ({
  ...initialState,
  device: {
    isReactNative: true,
    platform: Platform.OS,
  },
});

const store = configureStore({
  initialState: createNativeInitialState(),
  platformDeps: {},
});

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Ester', () => Root);
