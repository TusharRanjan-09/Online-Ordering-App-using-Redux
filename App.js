import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home';
import BooksScreen from './src/screens/Books';
import ElectronicsScreen from './src/screens/Electronics';
import CartScreen from './src/components/CartScreen';
import {Provider} from 'react-redux';
import store from './src/store/index';
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
       <NavigationContainer>
      <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Shopping Cart" component={HomeScreen}/>
        <Stack.Screen name="BooksScreen" component={BooksScreen} />     
        <Stack.Screen name="ElectronicsScreen" component={ElectronicsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
   
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
