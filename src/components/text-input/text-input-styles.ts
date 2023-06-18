import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  width?: string;
};

export const Container = styled(TextInput)<ContainerProps>`
  flex: 1;

  max-height: 50px;
  border-radius: 30px;

  ${({ theme, width }) => css`
    font-size: 16px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.PRIMARY.REGULAR};
    border: 1px solid ${theme.COLORS.BLACK};
    width: ${width || "300px"};
  `}

  padding: 8px 16px;
  color: ${({ theme }) => theme.COLORS.PARAGRAPH};
`;
