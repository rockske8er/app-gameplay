import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Component
import { GamePlayButtonIcon } from '../../Components/GamePlayButtonIcon';
// Image
import Ilustration from './../../assets/illustration.png';
// Styles
import { S } from './styles';
import { Background } from '../../Components/Background';
import { useAuth } from '../../Hooks/Auth';
import { Alert } from 'react-native';
import { Theme } from '../../Base/Styles/Theme';

export const SignIn = () => {
  const { signIn, loading } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
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
          {loading ? (
            <ActivityIndicator color={Theme.Colors.Primary} />
          ) : (
            <GamePlayButtonIcon
              title="Entre com Discord"
              onPress={handleSignIn}
            />
          )}
        </View>
      </View>
    </Background>
  );
};
