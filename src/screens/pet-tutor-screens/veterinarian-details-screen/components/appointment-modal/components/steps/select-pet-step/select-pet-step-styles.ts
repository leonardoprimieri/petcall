import styled from "styled-components/native";

type PetImageProps = {
  isSelected: boolean;
};

export const PetImage = styled.Image<PetImageProps>`
  width: 130px;
  height: 100px;
  border-radius: 6px;
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
