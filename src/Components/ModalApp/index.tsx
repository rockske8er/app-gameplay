import React, { ReactNode } from 'react';
import { View, Modal, ModalProps } from 'react-native';
import { Background } from '../Background';

import { S } from './styles';

type ModalAppProps = ModalProps & {
  children: ReactNode;
};

const ModalApp = ({ children, ...rest }: ModalAppProps) => {
  return (
    <Modal {...rest} transparent animationType="slide">
      <View style={S.Overlay}>
        <View style={S.Container}>
          <Background>
            <View style={S.Bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
};

export default ModalApp;
