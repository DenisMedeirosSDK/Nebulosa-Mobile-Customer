import React from 'react';
import { Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../screens/Dashboard';
import { Category } from '../screens/Category';
import { useTheme } from 'styled-components';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: theme.colors.background_light,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
        tabBarActiveTintColor: theme.colors.primary,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Inicio',
        }}
        component={Dashboard}
      />
      <Tab.Screen
        name="Category"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
          tabBarLabel: 'Categoria',
        }}
        component={Category}
      />
      <Tab.Screen
        name="History"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="calendar" size={size} color={color} />
          ),
          tabBarLabel: 'Historico',
        }}
        component={Category}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
          tabBarLabel: 'Perfil',
        }}
        component={Category}
      />
    </Tab.Navigator>
  );
}
