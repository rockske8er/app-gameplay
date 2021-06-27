import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Theme } from '../../Base/Styles/Theme';

import { S } from './styles';

export const Loading = () => {
  return (
    <View style={S.Container}>
      <ActivityIndicator size={'large'} color={Theme.Colors.Primary} />
    </View>
  );
};
