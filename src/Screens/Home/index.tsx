import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

//Component
import { Profile } from '../../Components/Profile';
import { ButtonPlus } from './../../Components/ButtonPlus';
import { GameCategory } from './../../Components/GameCategory';
import { ListHeader } from '../../Components/ListHeader';
import { ListDivider } from '../../Components/ListDivider';
import { Appoitment } from '../../Components/Appoitment';
import { Background } from '../../Components/Background';

import { S } from './styles';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState('');

  const handleCategorySelected = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

  const handleAppoitmentDetails = () => {
    navigation.navigate('Detalhes');
  };

  const handleAppoitmentCreate = () => {
    navigation.navigate('Criar Agendamento');
  };
  const appoitments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendárias',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 ás 18:00h',
      description: 'category 1',
    },

    {
      id: '2',
      guild: {
        id: '2',
        name: 'Moderada',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 ás 18:00h',
      description: 'category 2',
    },
  ];
  return (
    <Background>
      <View style={S.Header}>
        <Profile />
        <ButtonPlus onPress={handleAppoitmentCreate} />
      </View>

      <GameCategory
        setCategory={handleCategorySelected}
        categorySelected={category}
      />

      <View style={S.Content}>
        <ListHeader title="Partidas Agendadas" subtitle="Total 6" />

        <FlatList
          style={S.Matches}
          showsHorizontalScrollIndicator={false}
          data={appoitments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appoitment data={item} onPress={handleAppoitmentDetails} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </Background>
  );
};
