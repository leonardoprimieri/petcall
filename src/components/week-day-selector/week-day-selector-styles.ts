import styled from "styled-components/native";

type ContainerProps = {
  removePadding?: boolean;
};

export const Container = styled.View<ContainerProps>`
  margin-top: 16px;
  padding: ${({ removePadding }) => (removePadding ? 0 : "0px 48px")};
`;

export const WeekDaysContainer = styled.View`
  border-radius: 8px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  align-items: center;
  justify-content: space-around;
  gap: 22px;
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
