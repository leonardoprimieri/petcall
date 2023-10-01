import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  width: 150px;
  height: 150px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
