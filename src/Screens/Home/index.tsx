import React, { useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';

//Component
import { Profile } from '../../Components/Profile';
import { ButtonPlus } from './../../Components/ButtonPlus';
import { GameCategory } from './../../Components/GameCategory';
import { ListHeader } from '../../Components/ListHeader';
import { ListDivider } from '../../Components/ListDivider';
import { Appoitment, AppoitmentsData } from '../../Components/Appoitment';
import { Background } from '../../Components/Background';

import { S } from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOITMENTS } from '../../Configs/Storage';

import { Loading } from './../../Components/Loading';

export const Home = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);

  const [appoitments, setAppoitments] = useState<AppoitmentsData[]>([]);

  const getAppoitments = async () => {
    const response = await AsyncStorage.getItem(COLLECTION_APPOITMENTS);

    const storage: AppoitmentsData[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppoitments(storage.filter((item) => item.category === category));
    } else {
      setAppoitments(storage);
    }

    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      getAppoitments();
    }, [category])
  );

  const handleCategorySelected = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

  const handleAppoitmentDetails = (guildSelected: AppoitmentsData) => {
    navigation.navigate('Detalhes', { guildSelected });
  };

  const handleAppoitmentCreate = () => {
    navigation.navigate('Criar Agendamento');
  };

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
      {loading ? (
        <Loading />
      ) : (
        <>
          <ListHeader
            title="Partidas Agendadas"
            subtitle={` Total ${appoitments.length}`}
          />

          <FlatList
            style={S.Matches}
            showsHorizontalScrollIndicator={false}
            data={appoitments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appoitment
                data={item}
                onPress={() => handleAppoitmentDetails(item)}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 68 }}
          />
        </>
      )}
    </Background>
  );
};
