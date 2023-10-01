import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.PARAGRAPH};

  margin-bottom: 16px;
`;

export const TextContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  margin-top: 32px;
  width: 100%;
`;
