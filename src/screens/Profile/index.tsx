import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useNavigation, CommonActions } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import { InputIcon } from '../../components/Inputs/InputIcon';
import { ButtonArrowGo } from '../../components/Buttons/ButtonArrowGo';

import { useAuth } from '../../hook/auth';
import { api } from '../../services/api';

import {
  Container,
  Header,
  Wrapper,
  Title,
  ButtonLogout,
  HeaderExetend,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  Divider12px,
  Footer,
} from './styles';

export function Profile() {
  const { signOut, user, profile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(profile.avatarURL);

  const navigation = useNavigation();
  const theme = useTheme();

  function handleGoToSafety() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'PasswordSafety',
      })
    );
  }

  async function handleChangeAvatar() {
    try {
      const imageSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
        allowsMultipleSelection: false,
      });

      if (imageSelected.cancelled) return;
      if (imageSelected.uri) {
        setAvatar(imageSelected.uri);
      }

      const { uri: avatar } = imageSelected;

      const getFileName = imageSelected.uri.substr(
        imageSelected.uri.lastIndexOf('/') + 1
      );

      const data = new FormData();

      data.append('avatar', {
        name: `${getFileName}`,
        type: 'image/jpeg',
        uri: avatar,
      } as any);

      await api.patch('/users/avatar', data);

      setAvatar(imageSelected.uri);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <Wrapper>
          <Title>Perfil</Title>
        </Wrapper>
        <ButtonLogout onPress={signOut}>
          <Feather
            name="power"
            size={24}
            color={theme.colors.background_light}
          />
        </ButtonLogout>
      </Header>
      <HeaderExetend>
        <PhotoContainer>
          {!!avatar && <Photo source={{ uri: avatar }} />}
          <PhotoButton onPress={handleChangeAvatar}>
            <Feather
              name="camera"
              size={24}
              color={theme.colors.background_light}
            />
          </PhotoButton>
        </PhotoContainer>
      </HeaderExetend>
      <Content>
        <InputIcon iconName="user" defaultValue={name} editable={false} />
        <Divider12px />
        <InputIcon iconName="mail" defaultValue={email} editable={false} />
      </Content>
      <Footer>
        <ButtonArrowGo title="Segurança" onPress={handleGoToSafety} />
      </Footer>
    </Container>
  );
}
