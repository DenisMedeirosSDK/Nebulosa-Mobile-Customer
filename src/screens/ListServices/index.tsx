import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, View, ActivityIndicator } from 'react-native';

import axios from 'axios';
import { useTheme } from 'styled-components';

import { CardServices } from '../../components/Cards/CardServices';
import { HeaderSmall } from '../../components/Headers/HeaderSmall';

import { api } from '../../services/api';
import { ServiceDTO } from '../../dtos/ServiceDTO';

import { Container, Content } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Params {
  id: string;
}

interface ServicesDTO {
  id: string;
  name: string;
  description: string;
  price: string;
  available: boolean;
  duration: number;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export function ListServices() {
  const [services, setServices] = useState<ServicesDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
  const routes = useRoute();
  const theme = useTheme();

  const { id } = routes.params as Params;

  function handleOpenServiceDetails(service: ServicesDTO) {
    navigation.navigate('ServicesDetails', {
      service,
    });
  }

  useEffect(() => {
    const source = axios.CancelToken.source();
    async function loadServices() {
      try {
        setIsLoading(true);
        const response = await api.get(`services/search`, {
          headers: {
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbmlzQGVtYWlsLmNvbSIsImlhdCI6MTYyOTY1ODY1NCwiZXhwIjoxNjMyMjUwNjU0LCJzdWIiOiJhZDk1YzBjNi1hMGFkLTQyNjYtOTk2YS0yMThiMjNiYWQ1NGYifQ.ZaLgWEQKTXIFn9h1__uesvnVPHuxZSmGRnD13nI7ugg',
          },
          cancelToken: source.token,
          params: {
            categoryId: id,
          },
        });

        setServices(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    loadServices();

    return () => {
      source.cancel('Finish');
    };
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <HeaderSmall title="Serviços" />
      <Content>
        {isLoading ? (
          <ActivityIndicator size={24} color={theme.colors.background_dark} />
        ) : (
          <FlatList
            data={services}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CardServices
                data={item}
                onPress={() => handleOpenServiceDetails(item)}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 16 }} />}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Content>
    </Container>
  );
}
