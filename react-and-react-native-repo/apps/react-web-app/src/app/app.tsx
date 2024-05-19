import { sharedPrint } from '@react-and-react-native-repo/app-libs'; //This is how import works

export function App() {
  return (
    <div>
      <h1>
        <span>Hello there</span>
      </h1>
      <span>{'From shared module -> ' + sharedPrint()}</span>
    </div>
  );
}

export default App;
