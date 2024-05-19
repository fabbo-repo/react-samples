import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { sharedPrint } from '@react-and-react-native-repo/app-libs'; //This is how import works

export const App = () => {
  return (
    <>
      <SafeAreaView />
      <View>
        <Text style={styles.textLg}>Welcome Mobile</Text>
        <Text style={styles.textLg}>
          {'From shared module -> ' + sharedPrint()}
        </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  textLg: {
    fontSize: 24,
    padding: 24,
  },
});

export default App;
