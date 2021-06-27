import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../Hooks/Auth';
import { AppRoutes } from './app.routes';
import { SignIn } from './../Screens/SignIn';

export function Routes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}
