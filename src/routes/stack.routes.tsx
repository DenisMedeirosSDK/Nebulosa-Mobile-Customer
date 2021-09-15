import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { ListServices } from '../screens/ListServices';
import { ServicesDetails } from '../screens/ServicesDetails';
import { AppointmentDetails } from '../screens/AppointmentDetails';

import { TabRoutes } from './tab.routes';
import { PasswordSafety } from '../screens/PasswordSafety';

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
      <Stack.Screen name="ListServices" component={ListServices} />
      <Stack.Screen name="ServicesDetails" component={ServicesDetails} />
      <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Stack.Screen name="PasswordSafety" component={PasswordSafety} />
    </Stack.Navigator>
  );
}
