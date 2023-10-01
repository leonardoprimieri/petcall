import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 64px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
`;

export const Welcome = styled.Text`
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 18px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.BOLD};
`;
