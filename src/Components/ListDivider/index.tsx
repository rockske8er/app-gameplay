import React from 'react';
import { View } from 'react-native';

import { S } from './styles';

type ListDividerProps = {
  isCentered?: boolean;
};
export const ListDivider = ({ isCentered }: ListDividerProps) => {
  return (
    <View
      style={[
        S.Container,
        isCentered
          ? {
              marginVertical: 12,
            }
          : { marginTop: 2, marginBottom: 32 },
      ]}
    />
  );
};
