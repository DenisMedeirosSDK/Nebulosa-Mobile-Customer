import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 40px 25px;
`;

export const Footer = styled.View`
  margin-bottom: ${getBottomSpace() + 20}px;
  padding: 0 25px;
`;

export const ServiceInfos = styled.View``;

export const AppointmentLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text_semi};
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(15)}px;
`;

export const Appointment = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  font-size: ${RFValue(25)}px;
`;
export const ProviderName = styled.Text`
  color: ${({ theme }) => theme.colors.text_semi};
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(15)}px;
`;

export const Service = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  font-size: ${RFValue(25)}px;
`;

export const WrapperInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperTime = styled.View``;

export const DurationLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text_semi};
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(15)}px;
`;

export const Duration = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  font-size: ${RFValue(20)}px;
`;

export const WrapperPrice = styled.View``;

export const PriceLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text_semi};
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(15)}px;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  font-size: ${RFValue(20)}px;
`;

export const DescriptionLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text_semi};
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(15)}px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(15)}px;
  text-align: justify;
`;
