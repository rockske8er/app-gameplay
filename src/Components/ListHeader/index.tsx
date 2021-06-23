import React from 'react';
import { Text, View } from 'react-native';

import { S } from './styles';

interface ListProps {
  title: string;
  subtitle: string;
}

export const ListHeader = ({ title, subtitle }: ListProps) => {
  return (
    <View style={S.Container}>
      <Text style={S.Title}>{title}</Text>
      <Text style={S.Subtitle}>{subtitle}</Text>
    </View>
  );
};
