import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { AppointmentDTO } from '../../../dtos/AppointmentDTO';

import {
  Container,
  Content,
  ImageContainer,
  Photo,
  Infos,
  Name,
  ServiceInfo,
  Service,
  Duration,
  AppointmentInfo,
  Footer,
  Price,
  Status,
  Appointment,
} from './styles';

interface Props extends RectButtonProps {
  data: AppointmentDTO;
}

export function CardLastAppointment({ data, ...rest }: Props) {
  function handleOpenAppointmentDetails(id: string) {
    console.log('Details', id);
  }

  return (
    <Container {...rest} onPress={() => handleOpenAppointmentDetails(data.id)}>
      <Content>
        <ImageContainer>
          <Photo source={{ uri: data.providerId.avatarURL }} />
        </ImageContainer>
        <Infos>
          <Name>{data.customerId.name}</Name>
          <ServiceInfo>
            <Service>{data.serviceId.name}</Service>
            <Duration>{data.serviceId.duration} min</Duration>
          </ServiceInfo>
          <AppointmentInfo>
            <Appointment>{data.date}</Appointment>
          </AppointmentInfo>
          <Footer>
            <Price>R$ {data.serviceId.price}</Price>
            <Status>{data.status}</Status>
          </Footer>
        </Infos>
      </Content>
    </Container>
  );
}
