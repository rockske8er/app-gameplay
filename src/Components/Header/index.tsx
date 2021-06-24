import React, { ReactNode } from 'react';

import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  BorderlessButton,
  BorderlessButtonProps,
} from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
import { Theme } from '../../Base/Styles/Theme';

import { S } from './styles';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action }: HeaderProps) {
  const { Secondary100, Secondary40, Heading } = Theme.Colors;

  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient colors={[Secondary100, Secondary40]} style={S.Container}>
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={Heading} />
      </BorderlessButton>

      <Text style={S.Title}>{title}</Text>

      {action && <View>{action}</View>}
    </LinearGradient>
  );
}
