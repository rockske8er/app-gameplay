import React from 'react';
import { View, FlatList } from 'react-native';
import { ListDivider } from '../../Components/ListDivider';

import { S } from './styles';

import { Guild, GuildData } from './../../Components/Guild';

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
  ];
  return (
    <View>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild onPress={() => selectedGuild(item)} data={item} />
        )}
        ListHeaderComponent={() => <ListDivider isCentered />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        style={S.Guilds}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
      />
    </View>
  );
};
