import React, { ReactNode } from 'react';

import { ImageBackground, View, Text, FlatList } from 'react-native';
import { Header } from '../../Components/Header';

import { Background } from './../../Components/Background';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import Banner from '../../assets/banner.png';
import { S } from './styles';
import { Theme } from '../../Base/Styles/Theme';
import { ListHeader } from '../../Components/ListHeader';
import { Member } from '../../Components/Member';
import { ListDivider } from '../../Components/ListDivider';
import { GamePlayButtonIcon } from '../../Components/GamePlayButtonIcon';

interface AppoitmentDetailsProps {
  children: ReactNode;
}

export function AppoitmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Marcos de Souza',
      avatar_url: 'https://github.com/markus90souza.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Rodrigo ',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'offline',
    },
  ];
  const handleShare = () => {
    console.log('Compartilhou');
  };

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton onPress={handleShare}>
            <Fontisto name="share" size={24} color={Theme.Colors.Primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground style={S.Banner} source={Banner}>
        <View style={S.Content}>
          <Text style={S.Title}>Lendario</Text>
          <Text style={S.Headline}>
            src/Screens/AppoitmentDetails/index.tsx create mode 100644
            src/Screens/AppoitmentDetails/styles.ts
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        style={S.Members}
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 68 }}
      />

      <View style={S.Footer}>
        <GamePlayButtonIcon title="Entrar na Partida" />
      </View>
    </Background>
  );
}
