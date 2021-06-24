import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { S } from './styles';

interface ButtomProps extends RectButtonProps {
  title: string;
}

export const Buttom = ({ title, ...rest }: ButtomProps) => {
  return (
    <RectButton style={S.Container} {...rest}>
      <Text style={S.Title}>{title}</Text>
    </RectButton>
  );
};
