import React, { useEffect, useState } from 'react';
import { View, StatusBar, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from 'styled-components';

import { CardCategory } from '../../components/Cards/CardCategory';
import { HeaderSimpleSmall } from '../../components/Headers/HeaderSimpleSmall';

import { api } from '../../services/api';

import { Container, Content } from './styles';

interface CategoryDTO {
  id: string;
  name: string;
}

export function Category() {
  const [categories, setCategories] = useState<CategoryDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
  const theme = useTheme();

  function handleSearchByCategory(id: string) {
    navigation.navigate('ListServices', {
      id,
    });
  }

  useEffect(() => {
    async function laodCategories() {
      const response = await api.get('category');

      setCategories(response.data);
      setIsLoading(false);
    }
    laodCategories();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <HeaderSimpleSmall title="Categorias" />
      <Content>
        {isLoading ? (
          <ActivityIndicator size={24} color={theme.colors.background_dark} />
        ) : (
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <CardCategory
                data={item}
                onPress={() => handleSearchByCategory(item.id)}
              />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 16 }} />}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Content>
    </Container>
  );
}
