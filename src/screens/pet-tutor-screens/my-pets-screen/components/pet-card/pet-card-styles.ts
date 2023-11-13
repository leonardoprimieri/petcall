import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  padding: 12px 16px 12px 12px;
  gap: 12px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  border: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_DARK};
  border-radius: 12px;
  margin-bottom: 16px;
  width: 100%;
  align-items: center;
`;

export const PetInfo = styled.View``;

export const PetName = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.BOLD};
  font-size: 18px;
  text-transform: capitalize;
`;

export const PetDetail = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 16px;
`;

export const Text = styled.Text`
  font-size: 16px;
`;

export const PetInfoFooter = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  margin-left: auto;
`;
