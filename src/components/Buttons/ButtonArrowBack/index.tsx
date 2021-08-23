import React from 'react';
import { Feather } from '@expo/vector-icons';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { Container } from './styles';
import { useTheme } from 'styled-components';

interface Props extends BorderlessButtonProps {
  color?: string;
}

export function ButtonArrowBack({ color, ...rest }: Props) {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <Feather
        name="arrow-left"
        size={32}
        color={color ? color : theme.colors.background_light}
      />
    </Container>
  );
}
