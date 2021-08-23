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

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  font-size: ${RFValue(25)}px;
`;
