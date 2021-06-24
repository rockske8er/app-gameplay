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
  hasCheckBox?: boolean;
  checked: boolean;
}

export function Category({
  title,
  icon: Icon,
  hasCheckBox = false,
  checked = false,
  ...rest
}: CategoryProps) {
  const { Secondary40, Secondary50, Secondary70, Secondary85 } = Theme.Colors;
  return (
    <RectButton {...rest}>
      <LinearGradient style={S.Container} colors={[Secondary50, Secondary70]}>
        <LinearGradient
          style={[S.Content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? Secondary85 : Secondary50, Secondary40]}
        >
          {hasCheckBox && <View style={checked ? S.Checked : S.Check} />}

          <Icon width={48} height={48} />
          <Text style={S.Title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}
