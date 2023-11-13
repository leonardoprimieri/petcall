import styled from "styled-components/native";

export const HeroText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 22px;
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
