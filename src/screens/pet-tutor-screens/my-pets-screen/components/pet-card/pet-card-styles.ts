import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 12px 16px 12px 12px;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;

export const PetInfo = styled.View``;

export const PetName = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.BOLD};
  font-size: 18px;
  margin-bottom: 12px;
`;

export const Text = styled.Text`
  font-size: 16px;
`;
