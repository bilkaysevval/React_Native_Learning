import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeHandler } from './Contexts/ThemeContext';

import FirstScreen from './Screens/FirstScreen';
import SecondScreen from './Screens/SecondScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeHandler>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FirstScreen">
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
          <Stack.Screen name="SecondScreen" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeHandler>
  );
};

export default App;
