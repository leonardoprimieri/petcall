import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 32px 0px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  width: 100%;
`;

export const WeekDaySelectorContainer = styled.View`
  padding: 0px 32px;
`;

export const DiscountLabel = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.SEMIBOLD};
  margin-top: 12px;
`;

export const AppointmentPriceContainer = styled.View`
  width: 100%;
  align-items: center;
`;
