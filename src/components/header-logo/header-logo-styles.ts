import styled from "styled-components/native";

export const LogoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  justify-self: flex-end;
  position: relative;
  bottom: -30px;
`;

export const HeroText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 22px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Container = styled.View`
  margin-bottom: auto;
  margin-top: 24px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 30px;
`;
