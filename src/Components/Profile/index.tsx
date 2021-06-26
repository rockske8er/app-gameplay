import React, { ReactNode } from 'react';

import { View, Text } from 'react-native';
import { useAuth } from '../../Hooks/Auth';

import { Avatar } from './../Avatar';

import { S } from './styles';

interface ProfileProps {
  children: ReactNode;
}

export const Profile = () => {
  const { user } = useAuth();
  return (
    <View style={S.Container}>
      <Avatar urlImage={user.avatar} />

      <View>
        <View style={S.User}>
          <Text style={S.Greating}>Olá</Text>
          <Text style={S.Username}>{user.firstName}</Text>
        </View>
        <Text style={S.Message}>Hoje é dia de Vitória</Text>
      </View>
    </View>
  );
};
