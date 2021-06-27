import React, { useEffect, useState } from 'react';

import {
  ImageBackground,
  View,
  Text,
  FlatList,
  Alert,
  Share,
  Platform,
} from 'react-native';
import { Header } from '../../Components/Header';

import { Background } from './../../Components/Background';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import Banner from '../../assets/banner.png';
import { S } from './styles';
import { Theme } from '../../Base/Styles/Theme';
import { ListHeader } from '../../Components/ListHeader';
import { Member, MemberData } from '../../Components/Member';
import { ListDivider } from '../../Components/ListDivider';
import { GamePlayButtonIcon } from '../../Components/GamePlayButtonIcon';
import { AppoitmentsData } from '../../Components/Appoitment';
import { useRoute } from '@react-navigation/native';
import { api } from '../../Services/Api';
import { Loading } from '../../Components/Loading';

import * as Linking from 'expo-linking';

interface Params {
  guildSelected: AppoitmentsData;
}

type ChannelProps = {
  id: string;
  name: string;
  position: number;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  channels: ChannelProps[];
  members: MemberData[];
};

export function AppoitmentDetails() {
  const route = useRoute();
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);
  const { guildSelected } = route.params as Params;

  const getGuildWidget = async () => {
    try {
      const { data } = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );

      setWidget(data);
    } catch {
      Alert.alert('Error no Servidor ');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGuildWidget();
  }, []);

  const handleShareInvite = () => {
    const message =
      Platform.OS === 'ios'
        ? `Junte ao ${guildSelected.guild.name}`
        : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite,
    });
  };

  const handleGuildOpen = () => {
    Linking.openURL(widget.instant_invite);
  };

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelected.guild.owner && (
            <BorderlessButton onPress={handleShareInvite}>
              <Fontisto name="share" size={24} color={Theme.Colors.Primary} />
            </BorderlessButton>
          )
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

      {loading ? (
        <Loading />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />

          <FlatList
            style={S.Members}
            data={widget.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            contentContainerStyle={{ paddingBottom: 68 }}
          />
        </>
      )}

      {guildSelected.guild.owner && (
        <View style={S.Footer}>
          <GamePlayButtonIcon
            title="Entrar na Partida"
            onPress={handleGuildOpen}
          />
        </View>
      )}
    </Background>
  );
}
