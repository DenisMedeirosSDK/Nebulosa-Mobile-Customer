import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface CategoryDTO {
  id?: string;
  name?: string;
}

interface Props extends RectButtonProps {
  data: CategoryDTO;
}

export function CardCategory({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{data.name}</Title>
    </Container>
  );
}
