import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';

import { ButtonLarge } from '../../components/Buttons/ButtonLarge';
import { InputIcon } from '../../components/Inputs/InputIcon';
import { InputPassword } from '../../components/Inputs/InputPassword';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  Divider12px,
  Footer,
  CreateAccountButton,
  CreateAccountText,
} from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  function handleLogin() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'TabRoutes',
      })
    );
    console.log('Login success');
  }

  function handleCreateNewAccount() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'SignUp',
      })
    );
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <KeyboardAvoidingView behavior="position" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Header>
              <Title>Nebulosa</Title>
              <SubTitle>Sua plataforma de agendamento rápido</SubTitle>
            </Header>
            <Form>
              <InputIcon
                iconName="mail"
                placeholder="E-mail"
                autoCompleteType="email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setEmail}
                value={email}
              />
              <Divider12px />
              <InputPassword
                iconName="lock"
                placeholder="Senha"
                autoCapitalize="none"
                autoCompleteType="password"
                autoCorrect={false}
                onChangeText={setPassword}
                value={password}
              />
            </Form>
            <ButtonLarge title="Entrar" onPress={handleLogin} />
            <Footer>
              <CreateAccountButton onPress={handleCreateNewAccount}>
                <CreateAccountText>Criar conta</CreateAccountText>
              </CreateAccountButton>
            </Footer>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}
