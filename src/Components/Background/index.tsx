import React, { ReactNode } from 'react';
//LinearGardient
import { LinearGradient } from 'expo-linear-gradient';

interface BackgroundProps {
  children: ReactNode;
}

//Theme
import { Theme } from '../../Base/Styles/Theme';
//Styles
import { S } from './styles';

export const Background = ({ children }: BackgroundProps) => {
  const { Secondary80, Secondary100 } = Theme.Colors;
  return (
    <LinearGradient style={S.Container} colors={[Secondary80, Secondary100]}>
      {children}
    </LinearGradient>
  );
};
