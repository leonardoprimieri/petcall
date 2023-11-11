import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  width: 100%;
`;

export const ProcessingPaymentLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  text-align: center;
  margin-top: 8px;
`;

export const ButtonContainer = styled.View`
  padding: 0 55px;
  margin-top: 32px;
  gap: 8px;
`;
