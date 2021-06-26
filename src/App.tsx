import React from 'react';
import { StatusBar, LogBox } from 'react-native';
//Fonts
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';

//SplashScreen
import AppLoading from 'expo-app-loading';

//Routes
import { Routes } from './Routes';

//Component
import { Background } from './Components/Background';
import { AuthProvider } from './Hooks/Auth';

LogBox.ignoreLogs([
  'You are not currently signed in to Expo on your development machine. ',
]);

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
};

export default App;
