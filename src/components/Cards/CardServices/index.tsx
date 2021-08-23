import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ServiceDTO } from '../../../dtos/ServiceDTO';

import {
  Container,
  Content,
  ImageContainer,
  Photo,
  Infos,
  Name,
  Service,
  Footer,
  Duration,
  Divider,
  Price,
} from './styles';

interface Props extends RectButtonProps {
  data: ServiceDTO;
}

export function CardServices({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Content>
        <ImageContainer>
          <Photo
            source={{
              uri: data.userId.avatarURL,
            }}
          />
        </ImageContainer>
        <Infos>
          <Name>{data.userId.name}</Name>
          <Service>{data.name}</Service>
          <Footer>
            <Price>R$ {data.price}</Price>
            <Divider>-</Divider>
            <Duration>{data.duration} min</Duration>
          </Footer>
        </Infos>
      </Content>
    </Container>
  );
}
