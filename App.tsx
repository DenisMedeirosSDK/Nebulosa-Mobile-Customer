import React from 'react';

import AppLoading from 'expo-app-loading';

import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/Global/styles/theme';

import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  const [fontsLoading] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoading) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
