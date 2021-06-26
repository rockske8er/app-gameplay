import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../Hooks/Auth';
import { AuthRoutes } from './auth.routes';
import { SignIn } from './../Screens/SignIn';

export function Routes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}
