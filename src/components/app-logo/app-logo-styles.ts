import styled from "styled-components/native";

export const Logo = styled.Image`
  margin-bottom: 12px;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const LogoText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 22px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.EXTRA_BOLD};
  text-transform: uppercase;
`;
