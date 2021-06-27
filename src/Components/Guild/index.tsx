import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { GuildIcon } from '../../Components/GuildIcon';

import { S } from './styles';
import { Theme } from '../../Base/Styles/Theme';

export type GuildData = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type GuildProps = TouchableOpacityProps & {
  data: GuildData;
};

export const Guild = ({ data, ...rest }: GuildProps) => {
  const { name, icon, owner, id } = data;
  return (
    <TouchableOpacity {...rest} style={S.Container}>
      <GuildIcon guildId={id} iconId={icon} />
      <View style={S.Content}>
        <View>
          <Text style={S.GuildName}>{name}</Text>
          <Text style={S.OwnerName}>
            {owner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>
      </View>

      <Feather name="chevron-right" size={24} color={Theme.Colors.Heading} />
    </TouchableOpacity>
  );
};
