import React from 'react';
import { View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { S } from './styles';
import { Theme } from '../../Base/Styles/Theme';

interface AvatarProps {
  urlImage: string;
}

export function Avatar({ urlImage }: AvatarProps) {
  const { Secondary50, Secondary70 } = Theme.Colors;
  return (
    <LinearGradient style={S.Container} colors={[Secondary50, Secondary70]}>
      <Image style={S.Avatar} source={{ uri: urlImage }} />
    </LinearGradient>
  );
}
