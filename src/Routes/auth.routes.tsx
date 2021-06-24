import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Theme } from '../Base/Styles/Theme';
//Rotas
import { Home } from '../Screens/Home';
import { SignIn } from '../Screens/SignIn';
import { AppoitmentDetails } from '../Screens/AppoitmentDetails';

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: Theme.Colors.Background,
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="Detalhes" component={AppoitmentDetails} />
    </Navigator>
  );
};
