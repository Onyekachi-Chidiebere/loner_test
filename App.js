import React from 'react';
import AppNavigator from './AppNavigation';
import {Provider} from 'react-redux';
import store from './src/store/index';

const App = () => {
  console.log({store})
  return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
  );
};

export default App;
