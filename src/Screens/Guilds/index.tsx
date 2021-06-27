import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ListDivider } from '../../Components/ListDivider';
import { Loading } from './../../Components/Loading';
import { S } from './styles';

import { Guild, GuildData } from './../../Components/Guild';
import { api } from '../../Services/Api';

type GuildsProps = {
  selectedGuild: (guild: GuildData) => void;
};

export const Guilds = ({ selectedGuild }: GuildsProps) => {
  const [guilds, setGuilds] = useState<GuildData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGuilds = async () => {
      const { data } = await api.get('/users/@me/guilds');

      setGuilds(data);

      setLoading(false);
    };

    getGuilds();
  }, []);

  return (
    <View>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </View>
  );
};
