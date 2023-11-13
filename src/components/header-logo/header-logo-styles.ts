import styled from "styled-components/native";

type HeroTextProps = {
  smallTitle?: boolean;
};

export const HeroText = styled.Text<HeroTextProps>`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: ${({ smallTitle }) => (smallTitle ? "16px" : "22px")};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  margin: 0 auto;
`;

export const Container = styled.View`
  margin-bottom: auto;
  align-items: center;
  flex-direction: row;
  padding: 30px;
  width: 100%;
`;
