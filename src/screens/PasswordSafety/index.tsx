import React from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { ButtonLarge } from '../../components/Buttons/ButtonLarge';
import { HeaderSmall } from '../../components/Headers/HeaderSmall';
import { InputPassword } from '../../components/Inputs/InputPassword';

import { Container, Content, Divider12px } from './styles';

export function PasswordSafety() {
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
          />
          <HeaderSmall title="Segurança" />
          <Content>
            <InputPassword iconName="lock" placeholder="Senha" />
            <Divider12px />
            <InputPassword iconName="lock" placeholder="Nova senha" />
            <Divider12px />
            <InputPassword iconName="lock" placeholder="Repetir nova senha" />
            <Divider12px />
            <ButtonLarge title="Confirmar nova senha" />
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
