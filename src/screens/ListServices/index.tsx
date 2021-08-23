import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, View, ActivityIndicator } from 'react-native';

import axios from 'axios';
import { useTheme } from 'styled-components';

import { CardServices } from '../../components/Cards/CardServices';
import { HeaderSmall } from '../../components/Headers/HeaderSmall';

import { api } from '../../services/api';
import { ServiceDTO } from '../../dtos/ServiceDTO';

import { Container, Content } from './styles';

export function ListServices() {
  const [services, setServices] = useState<ServiceDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();
  const id = '672f0b73-f405-415c-851e-c8f95f89dc79';

  function handleOpenServiceDetails(service: ServiceDTO) {
    console.log('Details', service);
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
