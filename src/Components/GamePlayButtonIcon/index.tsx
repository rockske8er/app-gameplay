import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
} from 'react-native';

import { S } from './styles';
import DicordIcon from './../../assets/discord.png';

interface GamePlayButtonIconProps extends TouchableOpacityProps {
  title: string;
}

export const GamePlayButtonIcon = ({
  title,
  ...rest
}: GamePlayButtonIconProps) => {
  return (
    <TouchableOpacity style={S.Container} {...rest}>
      <View style={S.IconBox}>
        <Image source={DicordIcon} style={S.Icon} />
      </View>

      <Text style={S.Title}>{title}</Text>
    </TouchableOpacity>
  );
};
