import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100px;

  background-color: ${({ theme }) => theme.colors.background_semi};
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.archivo_500};

  text-transform: capitalize;
`;
