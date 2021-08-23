import React from 'react';
import { StatusBar } from 'react-native';

import { ButtonLarge } from '../../components/Buttons/ButtonLarge';
import { HeaderSmall } from '../../components/Headers/HeaderSmall';

import { ServiceDTO } from '../../dtos/ServiceDTO';

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

export function ServicesDetails() {
  const service: ServiceDTO = {
    id: 'asd-asd-asd-asd',
    name: 'Mão francesinha',
    description: 'Loram impsum',
    price: 35,
    available: true,
    duration: 20,
    categoryId: 'asdasd-asdasda-asdasdasd-asdasd',
    userId: {
      name: 'Juliana mesquita',
    },
  };

  function handleCreateAppointment(id: string) {
    console.log(service.id);
  }

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
          <ServiceName>{service.userId.name}</ServiceName>
          <Service>{service.name}</Service>
          <WrapperInfo>
            <WrapperTime>
              <DurationLabel>Duração</DurationLabel>
              <Duration>{service.duration} min</Duration>
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
