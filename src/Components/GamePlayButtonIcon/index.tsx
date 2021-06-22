import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { S } from './styles';
import DicordIcon from './../../assets/discord.png';

interface GamePlayButtonIconProps extends RectButtonProps {
  title: string;
}

export const GamePlayButtonIcon = ({
  title,
  ...rest
}: GamePlayButtonIconProps) => {
  return (
    <RectButton style={S.Container} {...rest}>
      <View style={S.IconBox}>
        <Image source={DicordIcon} style={S.Icon} />
      </View>

      <Text style={S.Title}>{title}</Text>
    </RectButton>
  );
};
