import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';

//Component
import { Profile } from '../../Components/Profile';
import { ButtonPlus } from './../../Components/ButtonPlus';
import { GameCategory } from './../../Components/GameCategory';
import { ListHeader } from '../../Components/ListHeader';

import { S } from './styles';
import { Appoitment } from '../../Components/Appoitment';

export const Home = () => {
  const [category, setCategory] = useState('');

  const handleCategorySelected = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
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
  ];
  return (
    <View style={S.Container}>
      <View style={S.Header}>
        <Profile />
        <ButtonPlus />
      </View>

      <View>
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
            renderItem={({ item }) => <Appoitment data={item} />}
          />
        </View>
      </View>
    </View>
  );
};
