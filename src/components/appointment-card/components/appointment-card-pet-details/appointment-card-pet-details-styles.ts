import { Theme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  width: 100%;
`;

export const PetDetailsContainer = styled.View`
  margin-top: 12px;
`;

export const PetDetailsWrapper = styled.View`
  flex-direction: row;
  gap: 32px;
`;

type ColorProps = {
  isRequestVariant?: boolean;
  theme: Theme;
};

const renderColor = ({ isRequestVariant, theme }: ColorProps) => {
  if (isRequestVariant) {
    return theme.COLORS.BLACK;
  }

  return theme.COLORS.PRIMARY;
};

export const PetName = styled.Text<ColorProps>`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.SEMIBOLD};
  font-size: 18px;
  color: ${({ theme, isRequestVariant }) =>
    renderColor({ theme, isRequestVariant })};
`;

export const PetInfo = styled.Text<ColorProps>`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 14px;
  color: ${({ theme, isRequestVariant }) =>
    renderColor({ theme, isRequestVariant })};
`;

export const PetNotes = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const PetNotesTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.SEMIBOLD};
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  margin: 24px 0px 8px 0px;
`;

export const Bold = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.SEMIBOLD};
`;
