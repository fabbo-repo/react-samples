import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@react-and-react-native-repo/app-libs';
import CounterComponent from './features/counter-component';

export const App = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};

export default App;
