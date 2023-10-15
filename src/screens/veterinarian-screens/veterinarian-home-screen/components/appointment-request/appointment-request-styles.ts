import styled from "styled-components/native";

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  text-align: center;
`;

export const Container = styled.View`
  padding: 32px;
  margin: 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  justify-content: space-between;
`;

export const MeetingLink = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 12px;
  margin: 16px 0px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
