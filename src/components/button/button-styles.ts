import { TouchableOpacity } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";

type ButtonProps = {
  width?: string;
  bold?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
};

const renderButtonBackground = (
  theme: DefaultTheme,
  variant?: "primary" | "secondary" | "tertiary"
) => {
  switch (variant) {
    case "primary":
      return theme.COLORS.PRIMARY;
    case "secondary":
      return theme.COLORS.SECONDARY_DARK;
    default:
      return "transparent";
  }
};

export const StyledButton = styled(TouchableOpacity)<ButtonProps>`
  background-color: ${({ theme, variant }) =>
    renderButtonBackground(theme, variant)};
  border: 0;
  border-radius: 10px;
  padding: 12px 16px;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  width: 100%;
  max-width: ${({ width }) => width || "100%"};

  flex-direction: row;
  justify-content: center;
`;

type ButtonTextProps = {
  bold?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
};

const renderButtonText = (
  theme: DefaultTheme,
  variant?: "primary" | "secondary" | "tertiary"
) => {
  switch (variant) {
    case "primary":
    case "secondary":
      return theme.COLORS.WHITE;
    default:
      return theme.COLORS.TITLE;
  }
};

export const ButtonText = styled.Text<ButtonTextProps>`
  font-family: ${({ theme, bold }) =>
    bold ? theme.FONTS.PRIMARY.BOLD : theme.FONTS.PRIMARY.REGULAR};
  font-size: 16px;
  color: ${({ theme, variant }) => renderButtonText(theme, variant)};
  text-align: center;
`;

export const Icon = styled.View`
  margin-right: 8px;
`;

export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
}))`
  height: 28px;
`;
