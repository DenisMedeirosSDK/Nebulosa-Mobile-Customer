import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import { ButtonLarge } from '../../components/Buttons/ButtonLarge';
import { HeaderSmall } from '../../components/Headers/HeaderSmall';

import { ServiceDTO } from '../../dtos/ServiceDTO';
import { convertSecondInMinute } from '../../utils/convertTimes';

import {
  Container,
  Content,
  ServiceInfos,
  ServiceName,
  Service,
  WrapperInfo,
  WrapperTime,
  DurationLabel,
  Duration,
  WrapperPrice,
  PriceLabel,
  Price,
  DescriptionLabel,
  Description,
  Footer,
} from './styles';

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

interface Params {
  service: ServicesDTO;
}

export function ServicesDetails() {
  const routes = useRoute();

  const { service } = routes.params as Params;

  function handleCreateAppointment(id: string) {
    console.log(service.id);
  }

  const durationFormatted = convertSecondInMinute(service.duration);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <HeaderSmall title="Detalhes do serviço" />
      <Content>
        <ServiceInfos>
          <ServiceName>{service.userId}</ServiceName>
          <Service>{service.name}</Service>
          <WrapperInfo>
            <WrapperTime>
              <DurationLabel>Duração</DurationLabel>
              <Duration>{durationFormatted} min</Duration>
            </WrapperTime>
            <WrapperPrice>
              <PriceLabel>Preço</PriceLabel>
              <Price>R$ {service.price}</Price>
            </WrapperPrice>
          </WrapperInfo>
          <DescriptionLabel>Descrição</DescriptionLabel>
          <Description>{service.description}</Description>
        </ServiceInfos>
      </Content>
      <Footer>
        <ButtonLarge
          title="Solicitar serviço"
          onPress={() => handleCreateAppointment(service.id)}
        />
      </Footer>
    </Container>
  );
}
