import React from 'react';
import { View, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { S } from './styles';
import { Theme } from '../../Base/Styles/Theme';

interface CategoryProps extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: CategoryProps) {
  const { Secondary70, Secondary50 } = Theme.Colors;
  return (
    <RectButton {...rest}>
      <LinearGradient style={S.Container} colors={[Secondary50, Secondary70]}>
        <View style={[S.Content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? S.Checked : S.Check} />
          <Icon width={48} height={48} />
          <Text style={S.Title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
}
