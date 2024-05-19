import { Provider } from 'react-redux';
import { store } from '@react-and-react-native-repo/app-libs';
import CounterComponent from './features/counter-component';

export function App() {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
}

export default App;
