import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ButtonArrowBack } from '../../Buttons/ButtonArrowBack';

import { Container, Content, Title, Wrapper } from './styles';

interface Props {
  title: string;
}

export function HeaderSmall({ title }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Content>
        <ButtonArrowBack onPress={handleGoBack} />
        <Wrapper>
          <Title>{title}</Title>
        </Wrapper>
      </Content>
    </Container>
  );
}
