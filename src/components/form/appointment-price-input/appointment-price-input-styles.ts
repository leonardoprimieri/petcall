import styled from "styled-components/native";

export const AppointmentPriceContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const DiscountLabel = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.SEMIBOLD};
  margin-top: 12px;
`;
