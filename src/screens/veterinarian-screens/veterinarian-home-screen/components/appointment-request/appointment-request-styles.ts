import styled from "styled-components/native";

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  text-align: center;
`;

export const StatusCardContainer = styled.View`
  padding: 32px;
  margin: 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
`;
