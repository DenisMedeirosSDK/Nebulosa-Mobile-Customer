import React from 'react';
import { StatusBar } from 'react-native';

import { CardAppointment } from '../../components/Cards/CardAppointment';
import { HeaderSimpleSmall } from '../../components/Headers/HeaderSimpleSmall';

import { AppointmentDTO } from '../../dtos/AppointmentDTO';

import { Container, Content } from './styles';

export function Dashboard() {
  const appointment: AppointmentDTO = {
    id: 'fcf19f6e-bdc8-4980-816a-a1ae75fcdeac',
    provider: {
      name: 'Ana carolina',
      avatarURL:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.unsplash.com%2Fphoto-1519014816548-bf5fe059798b%3Fixlib%3Drb-1.2.1%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb%26w%3D1080%26fit%3Dmax%26ixid%3DeyJhcHBfaWQiOjEyMDd9&f=1&nofb=1',
    },
    service: {
      name: 'Mão francesinha',
      price: 35,
      duration: 1500,
    },
    date: '2021-02-28T12:00:00.070Z',
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
        <CardAppointment data={appointment} />
      </Content>
    </Container>
  );
}
