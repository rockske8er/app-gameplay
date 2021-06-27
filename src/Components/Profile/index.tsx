import React, { ReactNode } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Text, Alert } from 'react-native';
import { useAuth } from '../../Hooks/Auth';

import { Avatar } from './../Avatar';

import { S } from './styles';

interface ProfileProps {
  children: ReactNode;
}

export const Profile = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    Alert.alert('Logout', 'Deseja sair da GamePlay', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          signOut();
        },
      },
    ]);
  };

  return (
    <View style={S.Container}>
      <RectButton onPress={handleSignOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <View>
        <View style={S.User}>
          <Text style={S.Greating}>Olá</Text>
          <Text style={S.Username}>{user.username}</Text>
        </View>
        <Text style={S.Message}>Hoje é dia de Vitória</Text>
      </View>
    </View>
  );
};
