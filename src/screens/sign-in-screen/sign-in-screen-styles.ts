import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HeroText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.BOLD};
  font-size: 30px;
  color: ${({ theme }) => theme.COLORS.TITLE};

  margin-bottom: 16px;
`;

export const LogoContainer = styled.View`
  margin-bottom: 48px;
  width: 100%;
  align-items: center;
`;
