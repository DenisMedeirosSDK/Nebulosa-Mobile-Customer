import React from 'react';
import { StatusBar } from 'react-native';

import { CardLastAppointment } from '../../components/Cards/CardLastAppointment';
import { HeaderSimpleSmall } from '../../components/Headers/HeaderSimpleSmall';

import { AppointmentDTO } from '../../dtos/AppointmentDTO';

import { Container, Content } from './styles';

export function Dashboard() {
  const appointment: AppointmentDTO = {
    id: '1',
    providerId: {
      avatarURL:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.unsplash.com%2Fphoto-1519014816548-bf5fe059798b%3Fixlib%3Drb-1.2.1%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb%26w%3D1080%26fit%3Dmax%26ixid%3DeyJhcHBfaWQiOjEyMDd9&f=1&nofb=1',
    },
    customerId: {
      name: 'Ana carolina',
    },
    serviceId: {
      name: 'Mão francesinha',
      price: 35,
      duration: 20,
    },
    date: 'Ter, 25 de abril às 14:30h',
    status: 'accept',
  };
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <HeaderSimpleSmall title="Próximo compromisso" />
      <Content>
        <CardLastAppointment data={appointment} />
      </Content>
    </Container>
  );
}
