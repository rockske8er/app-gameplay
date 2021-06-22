import React from 'react';
import { StatusBar } from 'react-native';
//Fonts
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';

//SplashScreen
import AppLoading from 'expo-app-loading';
//Screens
import { SignIn } from './Screens/SignIn';
//Component
import { Background } from './Components/Background';

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
      <SignIn />
    </Background>
  );
};

export default App;
