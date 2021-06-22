import React, { ReactNode } from 'react';

import { View, Text } from 'react-native';

//Component
import { Profile } from '../../Components/Profile';

import { S } from './styles';

interface HomeProps {
  children: ReactNode;
}

export const Home = () => {
  return (
    <View style={S.Container}>
      <Text>Home</Text>

      <View style={S.Header}>
        <Profile />
      </View>
    </View>
  );
};
