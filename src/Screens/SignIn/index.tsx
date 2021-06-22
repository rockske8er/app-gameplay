import React from 'react';
import { View, Text, Image } from 'react-native';
// Component
import { GamePlayButtonIcon } from '../../Components/GamePlayButtonIcon';
// Image
import Ilustration from './../../assets/illustration.png';
// Styles
import { S } from './styles';

export const SignIn = () => {
  return (
    <View style={S.Container}>
      <Image resizeMode={'stretch'} source={Ilustration} style={S.Image} />

      <View style={S.Content}>
        <Text style={S.Title}>
          Conecte-se{`\n`}e organize suas {`\n`}jogatinas
        </Text>
        <Text style={S.Headline}>
          Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
        </Text>

        <GamePlayButtonIcon
          title="Entre com Discord"
          onPress={() => console.log('ok')}
        />
      </View>
    </View>
  );
};
