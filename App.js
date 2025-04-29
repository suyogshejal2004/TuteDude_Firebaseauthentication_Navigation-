

import { StyleSheet, } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { ThemeProvider } from 'react-native-rapi-ui';
import AppNAvigator from './src/Navigator/AppNavigator';
import { AuthProvider } from './src/AuthoContext/AuthProvider';

const stack =createNativeStackNavigator();
export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        
        <AppNAvigator />
      </AuthProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//1