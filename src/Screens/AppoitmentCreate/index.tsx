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

interface AppoitmentDetailsProps {}

export function AppoitmentCreate() {
  const [category, setCategory] = useState('');

  const handleCategorySelected = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={S.Container}
    >
      <ScrollView>
        <Header title="Agendar Partida" />

        <View style={{ marginBottom: 24, marginTop: 32 }}>
          <ListHeader title="Categoria" />
        </View>

        <GameCategory
          categorySelected={category}
          setCategory={setCategory}
          hasCheckBox
        />

        <View style={S.Form}>
          <RectButton>
            <View style={S.Select}>
              {
                /*<View style={S.Image} /> */
                <GuildIcon />
              }

              <View style={S.SelectBody}>
                <Text style={S.Title}>Selecione o Servidor</Text>
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
              <Text style={S.Title}>Dia e Mês</Text>
              <View style={S.Collumn}>
                <SmallInput maxLength={2} />
                <Text style={S.Divider}>/</Text>
                <SmallInput maxLength={2} />
              </View>
            </View>

            <View>
              <Text style={S.Title}>Hora e Minuto</Text>
              <View style={S.Collumn}>
                <SmallInput maxLength={2} />
                <Text style={S.Divider}>:</Text>
                <SmallInput maxLength={2} />
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
          />
          <View style={S.Footer}>
            <Buttom title="Agendar" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
