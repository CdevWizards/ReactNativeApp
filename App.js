import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image  } from 'react-native';
import FormWithFormik from './src/components/FormWithFormik';
import { NativeBaseProvider } from "native-base";


import logo from './assets/logohere.jpg'; 

export default function App() {
  return (
      <NativeBaseProvider>
        <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
          <FormWithFormik />
        </View>
      </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  }
});
