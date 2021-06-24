import React from 'react';
import { View, Text } from 'react-native';
import { Theme } from '../../Base/Styles/Theme';

import { Avatar } from './../Avatar';
import { S } from './styles';

export type MemberData = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

type MemberProps = {
  data: MemberData;
};

export const Member = ({ data }: MemberProps) => {
  const { username, avatar_url, status } = data;

  const isOnline = status === 'online';

  return (
    <View style={S.Container}>
      <Avatar urlImage={avatar_url} />

      <View>
        <Text style={S.Username}> {username}</Text>

        <View style={S.Status}>
          <View
            style={[
              S.BulletStatus,
              {
                backgroundColor: isOnline
                  ? Theme.Colors.On
                  : Theme.Colors.Primary,
              },
            ]}
          />
          <Text style={S.StatusName}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  );
};
