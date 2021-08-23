import React from 'react';
import { ButtonArrowBack } from '../../Buttons/ButtonArrowBack';

import { Container, Content, Title, Wrapper } from './styles';

interface Props {
  title: string;
}

export function HeaderSmall({ title }: Props) {
  return (
    <Container>
      <Content>
        <ButtonArrowBack />
        <Wrapper>
          <Title>{title}</Title>
        </Wrapper>
      </Content>
    </Container>
  );
}
