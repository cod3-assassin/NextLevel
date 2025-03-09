import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator'; // Import TabNavigator
import {GlobalContextProvider} from '../contexts/GlobalContext'; // Import the new global context provider

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Next Level">
          <Stack.Screen name="Next Level" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
};

export default AppNavigator;
