import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { ButtonLarge } from '../../components/Buttons/ButtonLarge';
import { HeaderSmall } from '../../components/Headers/HeaderSmall';

import {
  convertISOToDate,
  convertSecondInMinute,
} from '../../utils/convertTimes';

import {
  Container,
  Content,
  ServiceInfos,
  AppointmentLabel,
  Appointment,
  ProviderName,
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

interface AppointmentDTO {
  id: string;
  date: string;
  serviceId?: string;
  customerId?: string;
  providerId?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  service: {
    id: string;
    name: string;
    description: string;
    price: string;
    available?: boolean;
    duration: number;
    categoryId?: string;
    userId?: string;
    createdAt?: string;
    updatedAt?: string;
  };
}

interface Params {
  id: string;
}

export function AppointmentDetails() {
  const [appointment, setAppointment] = useState<AppointmentDTO>();
  const theme = useTheme();
  const routes = useRoute();

  const { id } = routes.params as Params;

  function handleCancelAppointment(id: string) {
    console.log('handleCancelAppointment');
  }

  useEffect(() => {
    async function loadAppointDetails() {
      const response: AppointmentDTO = {
        id: 'fcf19f6e-bdc8-4980-816a-a1ae75fcdeac',
        date: '2021-02-28T12:00:00.070Z',
        serviceId: 'a9f2f29a-3a4e-45c6-b428-6c8c4271d03c',
        customerId: 'ad95c0c6-a0ad-4266-996a-218b23bad54f',
        providerId: '72b98a28-517b-4f48-83d6-2f02cdf10ecf',
        status: 'pending',
        service: {
          id: 'a9f2f29a-3a4e-45c6-b428-6c8c4271d03c',
          name: 'Pé bruto',
          description: 'Francesinha perfeita',
          price: '30',
          available: true,
          duration: 1500,
          categoryId: '672f0b73-f405-415c-851e-c8f95f89dc79',
          userId: '72b98a28-517b-4f48-83d6-2f02cdf10ecf',
        },
      };

      const appointmentDate = response.date;
      const serviceDuration = response.service?.duration;
      const servicePrice = Number(response.service?.price);

      const servicePriceFormatted = servicePrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
      const appointmentDateFormatted = convertISOToDate(appointmentDate);
      const serviceDurationFormatted = convertSecondInMinute(serviceDuration);

      setAppointment({
        id: response.id,
        date: appointmentDateFormatted,
        serviceId: response.serviceId,
        customerId: response.customerId,
        providerId: response.providerId,
        status: response.status,
        service: {
          id: response.service.id,
          name: response.service.name,
          description: response.service.description,
          price: servicePriceFormatted,
          available: response.service.available,
          duration: serviceDurationFormatted,
          categoryId: response.service.categoryId,
          userId: response.service.userId,
        },
      });
    }
    loadAppointDetails();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <HeaderSmall title="Detalhes da agenda" />
      <Content>
        <ServiceInfos>
          <AppointmentLabel>Agendado para o dia:</AppointmentLabel>
          <Appointment>{appointment?.date}</Appointment>
          <ProviderName>Ana carolina</ProviderName>
          <Service>{appointment?.service.name}</Service>
          <WrapperInfo>
            <WrapperTime>
              <DurationLabel>Duração</DurationLabel>
              <Duration>{appointment?.service.duration} min</Duration>
            </WrapperTime>
            <WrapperPrice>
              <PriceLabel>Preço</PriceLabel>
              <Price>{appointment?.service.price}</Price>
            </WrapperPrice>
          </WrapperInfo>
          <DescriptionLabel>Descrição</DescriptionLabel>
          <Description>{appointment?.service.description}</Description>
        </ServiceInfos>
      </Content>
      <Footer>
        <ButtonLarge
          title="Cancelar serviço"
          onPress={() => handleCancelAppointment(appointment?.id as string)}
          color={theme.colors.problem}
        />
      </Footer>
    </Container>
  );
}
