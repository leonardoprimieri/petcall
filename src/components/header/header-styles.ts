import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-top: 64px;
  margin-left: 32px;
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
