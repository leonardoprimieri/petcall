import styled from "styled-components/native";

export const Container = styled.View`
  gap: 32px;
`;

export const PetDetailsContainer = styled.View``;

export const PetDetailsWrapper = styled.View`
  flex-direction: row;
  gap: 32px;
`;

export const PetName = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.SEMIBOLD};
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const PetWeight = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const PetBirthDate = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const PetInfoContainer = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

export const PetNotes = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
