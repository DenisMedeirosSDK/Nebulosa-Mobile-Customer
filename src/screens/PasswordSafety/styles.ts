import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View``;

export const Content = styled.View`
  padding: 0px 25px;
  margin-top: 40px;
  margin-bottom: ${getBottomSpace() + 20}px;
`;

export const Divider12px = styled.View`
  margin: 6px 0;
`;
