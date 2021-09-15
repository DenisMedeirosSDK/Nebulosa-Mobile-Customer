import styled from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  width: 100%;
  height: ${getStatusBarHeight() + 100}px;
  background-color: ${({ theme }) => theme.colors.background_dark};
  padding: 20px 25px;

  flex-direction: row;
  align-items: flex-end;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  font-size: ${RFValue(25)}px;
`;

export const ButtonLogout = styled(BorderlessButton)``;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  font-size: ${RFValue(25)}px;
`;

export const HeaderExetend = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.background_dark};
  padding: 20px 25px;
  align-items: center;
`;

export const PhotoContainer = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background-color: ${({ theme }) => theme.colors.background_semi};
  margin-top: -15px;
`;

export const Photo = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`;

export const PhotoButton = styled(RectButton)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: 122px;
`;

export const Divider12px = styled.View`
  margin: 6px 0;
`;

export const Footer = styled.View`
  padding: 0px 25px;
`;

export const SecurityButton = styled.View``;
