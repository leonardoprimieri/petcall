import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  margin-top: 48px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.PARAGRAPH};
  margin-top: 16px;
`;

export const FormContainer = styled.View`
  gap: 96px;
  width: 100%;
  margin-top: 96px;
`;

export const ChoicesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`;
