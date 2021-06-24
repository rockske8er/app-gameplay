import React from 'react';
import { View, FlatList } from 'react-native';
import { ListDivider } from '../../Components/ListDivider';

import { S } from './styles';

import { Guild, GuildData } from './../Guild';

type GuildsProps = {
  selectedGuild: (guild: GuildData) => void;
};

export const Guilds = ({ selectedGuild }: GuildsProps) => {
  const guilds = [
    {
      id: '1',
      name: 'Lendárias',
      icon: '',
      owner: true,
    },

    {
      id: '2',
      name: 'Duelos',
      icon: '',
      owner: true,
    },

    {
      id: '3',
      name: 'Turma do Rock',
      icon: 'icon.png',
      owner: false,
    },
  ];
  return (
    <View>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild onPress={() => selectedGuild(item)} data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={S.Guilds}
      />
    </View>
  );
};
