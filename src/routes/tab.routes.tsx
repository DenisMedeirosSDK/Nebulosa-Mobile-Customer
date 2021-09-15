import React from 'react';
import { Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import { Dashboard } from '../screens/Dashboard';
import { Category } from '../screens/Category';
import { History } from '../screens/History';
import { Profile } from '../screens/Profile';

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
          tabBarLabel: 'Serviços',
        }}
        component={Category}
      />
      <Tab.Screen
        name="History"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="calendar" size={size} color={color} />
          ),
          tabBarLabel: 'Histórico',
        }}
        component={History}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
          tabBarLabel: 'Perfil',
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
