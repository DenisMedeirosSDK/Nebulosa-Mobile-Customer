import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, ActivityIndicator, View } from 'react-native';
import { useTheme } from 'styled-components';

import { CardAppointment } from '../../components/Cards/CardAppointment';
import { HeaderSimpleSmall } from '../../components/Headers/HeaderSimpleSmall';

import { AppointmentDTO } from '../../dtos/AppointmentDTO';
import { api } from '../../services/api';

import { Container, Content } from './styles';

export function History() {
  const [appointments, setAppointments] = useState<AppointmentDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();

  useEffect(() => {
    async function loadHistoryAppointment() {
      try {
        const response = await api.get('appointments', {
          headers: {
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbmlzQGVtYWlsLmNvbSIsImlhdCI6MTYyOTY1ODY1NCwiZXhwIjoxNjMyMjUwNjU0LCJzdWIiOiJhZDk1YzBjNi1hMGFkLTQyNjYtOTk2YS0yMThiMjNiYWQ1NGYifQ.ZaLgWEQKTXIFn9h1__uesvnVPHuxZSmGRnD13nI7ugg',
          },
        });

        setAppointments(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    loadHistoryAppointment();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <HeaderSimpleSmall title="Hitorico de compromissos" />
      <Content>
        {isLoading ? (
          <ActivityIndicator size={24} color={theme.colors.background_dark} />
        ) : (
          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <CardAppointment data={item} />}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 16 }} />}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Content>
    </Container>
  );
}
