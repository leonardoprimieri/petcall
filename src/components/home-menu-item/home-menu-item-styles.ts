import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  width: 150px;
  height: 150px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
`;
