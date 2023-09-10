import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 16px;
`;

export const WeekDaysContainer = styled.View`
  border-radius: 8px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  padding: 22px 16px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.BOLD};
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const ErrorMessage = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  color: ${({ theme }) => theme.COLORS.ERROR};
  font-size: 12px;
  margin-top: 4px;
`;
