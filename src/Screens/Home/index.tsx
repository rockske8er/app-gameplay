import React, { useState } from 'react';

import { View } from 'react-native';

//Component
import { Profile } from '../../Components/Profile';
import { ButtonPlus } from './../../Components/ButtonPlus';
import { GameCategory } from './../../Components/GameCategory';

import { S } from './styles';

export const Home = () => {
  const [category, setCategory] = useState('');

  const handleCategorySelected = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

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
      </View>
    </View>
  );
};
