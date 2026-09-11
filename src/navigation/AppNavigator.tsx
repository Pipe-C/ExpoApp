import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { MenuScreen } from '../screens/MenuScreen';
import { CounterScreen } from '../screens/CounterScreen';
import { AppStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}