import React, { ReactNode } from 'react';

import { Image, Text } from 'react-native';

import { S } from './styles';

interface GuildIconProps {}

export function GuildIcon({}: GuildIconProps) {
  const uri =
    'https://images-na.ssl-images-amazon.com/images/I/51lpm9SpsJL.png';
  return <Image style={S.Image} source={{ uri }} resizeMode="contain" />;
}
