import styled from "styled-components/native";

export const ModalTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.BOLD};
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.BLACK};
  margin-bottom: 16px;
`;
