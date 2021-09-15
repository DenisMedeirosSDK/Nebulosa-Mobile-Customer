import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.background_light};
  align-items: center;
  padding: 0 25px;
  margin-bottom: 12px;
`;
export const Title = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.inter_500};
  font-size: ${RFValue(20)}px;
`;
