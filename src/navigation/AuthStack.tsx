import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import LaunchScreen from '../screens/auth/LaunchScreen';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"LaunchScreen"}
    >
      <Stack.Screen
        name="LaunchScreen"
        component={LaunchScreen}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />

      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
