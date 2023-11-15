import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 32px;
  gap: 16px;
`;

export const ModalTitle = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  text-align: center;
`;

export const ModalDescription = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  color: ${({ theme }) => theme.COLORS.PARAGRAPH};
`;

export const LinkText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  text-align: center;
  text-decoration: underline;
`;
