import React from 'react';

import { Image, View } from 'react-native';

import Discord from './../../assets/discord.svg';
import { S } from './styles';

const { CDN_IMAGE } = process.env;

interface GuildIconProps {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: GuildIconProps) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <View style={S.Container}>
      {iconId ? (
        <Image style={S.Image} source={{ uri }} resizeMode="contain" />
      ) : (
        <Discord width={40} height={40} />
      )}
    </View>
  );
}
