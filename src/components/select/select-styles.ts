import { Picker } from "@react-native-picker/picker";
import { css } from "styled-components";
import styled from "styled-components/native";

export const StyledSelect = styled(Picker)``;

type SelectContainerProps = {
  width?: string;
};

export const SelectContainer = styled.View<SelectContainerProps>`
  border-radius: 10px;

  ${({ theme, width }) => css`
    font-size: 16px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.PRIMARY.REGULAR};
    border: 1px solid ${theme.COLORS.INPUT_BORDER};
    width: ${width || "100%"};
  `}

  height: 48px;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.PARAGRAPH};
`;

export const SelectLabel = styled.Text`
  color: ${({ theme }) => theme.COLORS.INPUT_BORDER};
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  align-self: flex-start;
  margin-left: 16px;
  margin-bottom: 4px;
`;

export const Container = styled.View``;
