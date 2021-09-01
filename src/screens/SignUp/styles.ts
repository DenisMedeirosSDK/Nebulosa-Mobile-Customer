import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding: 0 25px;
  background-color: ${({ theme }) => theme.colors.background_semi};
`;

export const Header = styled.View`
  align-items: center;
  margin-top: ${getStatusBarHeight() + 100}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(36)}px;
  font-family: ${({ theme }) => theme.fonts.inter_600};
  color: ${({ theme }) => theme.colors.primary};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const Divider12px = styled.View`
  margin: 6px 0;
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: ${getBottomSpace() + 20}px;
`;

export const CreateAccountButton = styled.TouchableOpacity``;

export const CreateAccountText = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.inter_500};
  color: ${({ theme }) => theme.colors.text_dark};
`;
