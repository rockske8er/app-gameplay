import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from 'react-native';
import { Background } from '../Background';

import { S } from './styles';

type ModalAppProps = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

export const ModalApp = ({ children, closeModal, ...rest }: ModalAppProps) => {
  return (
    <Modal {...rest} transparent animationType="slide" statusBarTranslucent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={S.Overlay}>
          <View style={S.Container}>
            <Background>
              <View style={S.Bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
