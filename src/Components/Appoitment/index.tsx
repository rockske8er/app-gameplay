import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { GuildIcon } from '../GuildIcon';

import { categories } from '../../Utils/categories';

import Player from './../../assets/player.svg';
import Calendar from './../../assets/calendar.svg';

import { S } from './styles';
import { Theme } from '../../Base/Styles/Theme';

export type GuildProps = {
  name: string;
  owner: boolean;
};

export type AppoitmentsData = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

interface AppoitmentProps extends RectButtonProps {
  data: AppoitmentsData;
}

export function Appoitment({ data, ...rest }: AppoitmentProps) {
  const [category] = categories.filter((cat) => cat.id === data.category);
  const { name, owner } = data.guild;
  const { Primary, On } = Theme.Colors;
  return (
    <RectButton {...rest}>
      <View style={S.Container}>
        <GuildIcon />
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
