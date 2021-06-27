import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { GuildIcon } from '../GuildIcon';
import { GuildData } from './../Guild';

import { categories } from '../../Utils/categories';

import Player from './../../assets/player.svg';
import Calendar from './../../assets/calendar.svg';

import { S } from './styles';
import { Theme } from '../../Base/Styles/Theme';
import { LinearGradient } from 'expo-linear-gradient';

export type AppoitmentsData = {
  id: string;
  guild: GuildData;
  category: string;
  date: string;
  description: string;
};

export interface AppoitmentProps extends RectButtonProps {
  data: AppoitmentsData;
}

export function Appoitment({ data, ...rest }: AppoitmentProps) {
  const [category] = categories.filter((cat) => cat.id === data.category);
  const { name, owner, id, icon } = data.guild;
  const { Primary, On, Secondary50, Secondary70 } = Theme.Colors;
  return (
    <RectButton {...rest}>
      <View style={S.Container}>
        <LinearGradient
          colors={[Secondary50, Secondary70]}
          style={S.GuildIconContainer}
        >
          <GuildIcon guildId={id} iconId={icon} />
        </LinearGradient>

        <View style={S.Content}>
          <View style={S.Header}>
            <Text style={S.Title}>{name}</Text>
            <Text style={S.Category}>{category.title}</Text>
          </View>

          <View style={S.Footer}>
            <View style={S.DateInfo}>
              <Calendar />
              <Text style={S.Date}>{data.date}</Text>
            </View>

            <View style={S.PlayerInfo}>
              <Player fill={owner ? Primary : On} />
              <Text style={[S.Player, { color: owner ? Primary : On }]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
