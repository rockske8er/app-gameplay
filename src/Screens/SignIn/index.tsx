import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Component
import { GamePlayButtonIcon } from '../../Components/GamePlayButtonIcon';
// Image
import Ilustration from './../../assets/illustration.png';
// Styles
import { S } from './styles';
import { Background } from '../../Components/Background';

export const SignIn = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Home');
  };

  return (
    <Background>
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
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
};
