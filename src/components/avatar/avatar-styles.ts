import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 9999px;
  padding: 4px;
`;

export const RoundedImage = styled.Image`
  border-radius: 9999px;
`;
