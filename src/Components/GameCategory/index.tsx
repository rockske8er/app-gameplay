import React, { ReactNode } from 'react';
import { ScrollView } from 'react-native';
import { categories } from '../../Utils/categories';

import { S } from './styles';

import { Category } from './../Category';

interface GameCategoryProps {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
}

export const GameCategory = ({
  categorySelected,
  setCategory,
}: GameCategoryProps) => {
  return (
    <ScrollView
      style={S.Container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingRight: 40,
      }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
};
