import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import start from '../../common/app/start';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class App extends Component {

  static propTypes = {
    initComplete: PropTypes.bool.isRequired,
  };

  render() {
    const { initComplete } = this.props;
    // Don't render anything until initComplete (async) to prevent flashes
    // of unloaded content.
    if (!initComplete) return null;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello World</Text>
      </View>
    );
  }
}

App = connect(state => ({
  initComplete: state.app.initComplete,
}), null)(App);

export default start(App);
