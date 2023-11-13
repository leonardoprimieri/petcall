import { Link } from "@react-navigation/native";
import styled from "styled-components/native";

type PetImageWrapperProps = {
  isSelected: boolean;
};

export const PetImageWrapper = styled.View<PetImageWrapperProps>`
  border: 2px solid;
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.COLORS.PRIMARY : theme.COLORS.WHITE};
  border-radius: 8px;
`;

export const PetImage = styled.Image`
  border-radius: 6px;
  width: 130px;
  height: 100px;
`;

export const PetCard = styled.Pressable`
  align-items: center;
`;

type PetNameProps = {
  isSelected: boolean;
};

export const PetName = styled.Text<PetNameProps>`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.BOLD};
  font-size: 16px;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.COLORS.PRIMARY : theme.COLORS.BLACK};
  margin-top: 8px;
`;

export const MissingPetsInfo = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  margin-top: 8px;
  text-align: center;
  width: 300px;
`;

export const MissingPetsInfoContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const RegisterPetLink = styled(Link)`
  margin-top: 8px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
