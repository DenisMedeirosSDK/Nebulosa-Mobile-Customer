import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  height: ${getStatusBarHeight() + 100}px;
  background-color: ${({ theme }) => theme.colors.background_dark};
  padding: 0px 25px;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  font-size: ${RFValue(25)}px;
  margin-bottom: 20px;
`;
