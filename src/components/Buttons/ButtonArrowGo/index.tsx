import React from 'react';
import { Feather } from '@expo/vector-icons';

import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
}

export function ButtonArrowGo({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Feather name="chevron-right" size={24} color="black" />
    </Container>
  );
}
