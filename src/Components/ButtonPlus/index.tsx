import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { S } from './styles';
import { Theme } from '../../Base/Styles/Theme';

interface ButtonPlusProps extends RectButtonProps {}

export function ButtonPlus({ ...rest }: ButtonPlusProps) {
  return (
    <RectButton {...rest} style={S.Container}>
      <MaterialCommunityIcons
        name="plus"
        size={24}
        color={Theme.Colors.Heading}
      />
    </RectButton>
  );
}
