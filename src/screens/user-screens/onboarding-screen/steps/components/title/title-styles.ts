import styled from "styled-components/native";

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.SEMIBOLD};
  font-size: 26px;
  color: ${({ theme }) => theme.COLORS.TITLE};

  margin-bottom: 16px;
`;
