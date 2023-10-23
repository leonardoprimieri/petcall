import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: flex-end;
  padding: 12px 16px 12px 12px;
  gap: 12px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  border-radius: 12px;
  margin-bottom: 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_DARK};
`;

export const FirstContainer = styled.View`
  flex-direction: row;
  gap: 12px;
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
