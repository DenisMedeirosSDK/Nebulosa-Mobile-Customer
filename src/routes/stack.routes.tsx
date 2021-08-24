import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ListServices } from '../screens/ListServices';
import { ServicesDetails } from '../screens/ServicesDetails';
import { TabRoutes } from './tab.routes';

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
      <Stack.Screen name="ListServices" component={ListServices} />
      <Stack.Screen name="ServicesDetails" component={ServicesDetails} />
    </Stack.Navigator>
  );
}
