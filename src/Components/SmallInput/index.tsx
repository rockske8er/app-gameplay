import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { S } from './styles';

export const SmallInput = ({ ...rest }: TextInputProps) => {
  return <TextInput style={S.Container} {...rest} keyboardType="numeric" />;
};
