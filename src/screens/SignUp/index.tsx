import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  Alert,
} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import * as Yup from 'yup';

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

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigation = useNavigation();

  async function handleCreateAccount() {
    try {
      const schema = Yup.object().shape({
        passwordConfirm: Yup.string().required('Senha é obrigatória').min(6),
        password: Yup.string()
          .required('Senha é obrigatória')
          .min(6, 'Senha requer no minímo 6 digitos'),
        email: Yup.string().required('E-mail é obrigatório').email(),
        name: Yup.string().required('Nome é obrigatório'),
      });

      if (!password || !passwordConfirm) {
        return Alert.alert('Informe a senha e a confirmação');
      }

      if (password != passwordConfirm) {
        return Alert.alert('Senha não são iguais.');
      }

      const data = { name, email, password, passwordConfirm };

      await schema.validate(data);
      navigation.dispatch(
        CommonActions.navigate({
          name: 'TabRoutes',
        })
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      } else {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao cadastrar, tente novamente.'
        );
      }
    }
  }

  function handleGoLogin() {
    navigation.goBack();
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
                iconName="user"
                placeholder="Nome"
                autoCompleteType="name"
                keyboardType="default"
                autoCapitalize="sentences"
                autoCorrect={false}
                onChangeText={setName}
                value={name}
              />
              <Divider12px />
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
              <Divider12px />
              <InputPassword
                iconName="lock"
                placeholder="Repetir senha"
                autoCapitalize="none"
                autoCompleteType="password"
                autoCorrect={false}
                onChangeText={setPasswordConfirm}
                value={passwordConfirm}
              />
            </Form>
            <ButtonLarge title="Cadastrar" onPress={handleCreateAccount} />
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Footer>
        <CreateAccountButton onPress={handleGoLogin}>
          <CreateAccountText>Já tenho uma conta</CreateAccountText>
        </CreateAccountButton>
      </Footer>
    </>
  );
}
