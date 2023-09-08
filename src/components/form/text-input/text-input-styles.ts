import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  width?: number;
};

export const Container = styled.View<ContainerProps>`
  width: 100%;
  align-items: center;
  max-width: ${({ width }) => width || "300px"};
`;

type InputProps = {
  invalid?: boolean;
  errorMessage?: string;
};

export const StyledInput = styled(TextInput)<InputProps>`
  height: 50px;
  border-radius: 30px;

  ${({ theme, invalid }) => css`
    font-size: 16px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.PRIMARY.REGULAR};
    border: 1px solid ${invalid ? theme.COLORS.ERROR : theme.COLORS.BLACK};
    width: 100%;
  `}

  padding: 8px 16px;
  color: ${({ theme }) => theme.COLORS.PARAGRAPH};
`;

export const ErrorMessage = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.ERROR};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  align-self: flex-start;
  margin-left: 12px;
  margin-top: 4px;
`;
