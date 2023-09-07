import styled from "styled-components/native";

export const FooterText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.PARAGRAPH};
  margin-top: 16px;
`;

export const LinkButton = styled.TouchableOpacity`
  margin-top: 17px;
`;

export const LinkText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
`;

export const Form = styled.View`
  gap: 16px;
  margin-top: 16px;
`;

export const Footer = styled.View`
  flex-direction: row;
  gap: 12px;
`;
