import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.background_semi};
  justify-content: center;
  padding: 10px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageContainer = styled.View``;

export const Photo = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Infos = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_semi};
  font-family: ${({ theme }) => theme.fonts.archivo_400};
`;

export const Service = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.archivo_500};
`;

export const Footer = styled.View`
  flex-direction: row;
`;

export const Price = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.archivo_500};
`;

export const Divider = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  margin: 0 6px;
`;

export const Duration = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.archivo_500};
`;
