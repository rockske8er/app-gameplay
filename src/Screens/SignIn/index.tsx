import React from 'react';

import { View, Text, Image, StatusBar } from 'react-native';
import { S } from './styles';

import Ilustration from './../../assets/illustration.png';
import { GamePlayButtonIcon } from '../../Components/GamePlayButtonIcon';

export const SignIn = () => {
  return (
    <View style={S.Container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Image resizeMode={'stretch'} source={Ilustration} style={S.Image} />

      <View style={S.Content}>
        <Text style={S.Title}>
          Organize{`\n`}suas jogatinas{`\n`}facilmente
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
