import React, { useState } from 'react';

import {
  Platform,
  KeyboardAvoidingView,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { Header } from '../../Components/Header';

import { Background } from './../../Components/Background';

import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { S } from './styles';
import { Theme } from '../../Base/Styles/Theme';
import { ListHeader } from '../../Components/ListHeader';

import { GuildIcon } from '../../Components/GuildIcon';
import { GameCategory } from '../../Components/GameCategory';
import { SmallInput } from '../../Components/SmallInput';
import { Textarea } from '../../Components/Textarea';
import { Buttom } from '../../Components/Buttom';
import { ModalApp } from '../../Components/ModalApp';
import { Guilds } from '../Guilds';
import { GuildData } from '../../Components/Guild';

import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOITMENTS } from '../../Configs/Storage';
import { useNavigation } from '@react-navigation/native';

interface AppoitmentDetailsProps {}

export function AppoitmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildData>({} as GuildData);

  const [day, setDay] = useState('');
  const [minute, setMinute] = useState('');
  const [month, setMonth] = useState('');
  const [hour, sethour] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  const handleOpenGuilds = () => {
    setOpenGuildsModal(!openGuildsModal);
  };

  const handleCloseModal = () => {
    setOpenGuildsModal(false);
  };

  const handleGuildSelected = (guildSelected: GuildData) => {
    setGuild(guildSelected);
    setOpenGuildsModal(!openGuildsModal);
  };

  const handleCategorySelected = (categoryId: string) => {
    setCategory(categoryId);
  };

  const handleSave = async () => {
    const newAppoitment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description,
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOITMENTS);

    const appoitments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOITMENTS,
      JSON.stringify([...appoitments, newAppoitment])
    );

    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={S.Container}
    >
      <Background>
        <Header title="Agendar Partida" />

        <ScrollView>
          <View style={{ marginBottom: 24 }}>
            <ListHeader title="Categoria" />
          </View>

          <GameCategory
            categorySelected={category}
            setCategory={handleCategorySelected}
            hasCheckBox
          />

          <View style={S.Form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={S.Select}>
                {guild.icon ? (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <View style={S.Image} />
                )}

                <View style={S.SelectBody}>
                  <Text style={S.Title}>
                    {guild.name ? guild.name : 'Selecione o Servidor'}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  size={18}
                  color={Theme.Colors.Heading}
                />
              </View>
            </RectButton>

            <View style={S.Field}>
              <View>
                <Text style={[S.Title, { marginBottom: 8 }]}>Dia e Mês</Text>
                <View style={S.Collumn}>
                  <SmallInput onChangeText={setDay} maxLength={2} />
                  <Text style={S.Divider}>/</Text>
                  <SmallInput onChangeText={setMonth} maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[S.Title, { marginBottom: 8 }]}>
                  Hora e Minuto
                </Text>
                <View style={S.Collumn}>
                  <SmallInput onChangeText={sethour} maxLength={2} />
                  <Text style={S.Divider}>:</Text>
                  <SmallInput onChangeText={setMinute} maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[S.Field, { marginBottom: 12 }]}>
              <Text style={S.Title}>Descrição</Text>
              <Text style={S.TextLimit}>Max 100 Caracteres</Text>
            </View>

            <Textarea
              multiline
              maxLength={100}
              numberOfLines={6}
              autoCorrect={false}
              onChangeText={setDescription}
            />
            <View style={S.Footer}>
              <Buttom title="Agendar" onPress={handleSave} />
            </View>
          </View>
        </ScrollView>

        <ModalApp closeModal={handleCloseModal} visible={openGuildsModal}>
          <Guilds selectedGuild={handleGuildSelected} />
        </ModalApp>
      </Background>
    </KeyboardAvoidingView>
  );
}
