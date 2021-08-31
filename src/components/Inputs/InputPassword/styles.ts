import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
`;

export const IconContainer = styled.View<Props>`
  width: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_light};
  margin-right: 2px;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.primary};
    `}
`;

export const InputText = styled.TextInput<Props>`
  flex: 1;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.background_light};

  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(15)}px;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.primary};
    `}
`;

export const ButtonContainer = styled.TouchableOpacity<Props>`
  width: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_light};

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.primary};
    `}
`;
