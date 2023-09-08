import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type ButtonProps = {
  width?: string;
  bold?: boolean;
  variant?: "primary" | "secondary";
};

export const StyledButton = styled(TouchableOpacity)<ButtonProps>`
  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.COLORS.PRIMARY : theme.COLORS.SECONDARY_DARK};
  border: 0;
  border-radius: 16px;
  padding: 12px 16px;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  width: 100%;
  max-width: ${({ width }) => width || "100%"};

  flex-direction: row;
  justify-content: center;
`;

type ButtonTextProps = {
  bold?: boolean;
};

export const ButtonText = styled.Text<ButtonTextProps>`
  font-family: ${({ theme, bold }) =>
    bold ? theme.FONTS.PRIMARY.REGULAR : theme.FONTS.PRIMARY.BOLD};
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Icon = styled.View`
  margin-right: 8px;
`;

export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
}))`
  height: 28px;
`;
