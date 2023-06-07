/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * @format
 * 
 * This page just for rooting navigation between page
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from './Dashboard';
import About from './About';
import NewsPage from './NewsPage';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard'>
        <Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='NewsPage' component={NewsPage} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;