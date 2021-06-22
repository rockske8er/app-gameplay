import React, { ReactNode } from 'react';

import { View, Text } from 'react-native';

import { Avatar } from './../Avatar';

import { S } from './styles';

interface ProfileProps {
  children: ReactNode;
}

export const Profile = () => {
  return (
    <View style={S.Container}>
      <Avatar
        urlImage={'https://avatars.githubusercontent.com/u/35318681?v=4'}
      />

      <View>
        <View style={S.User}>
          <Text style={S.Greating}>Olá</Text>
          <Text style={S.Username}>Marcos de Souza</Text>
        </View>
        <Text style={S.Message}>Hoje é dia de Vitória</Text>
      </View>
    </View>
  );
};
