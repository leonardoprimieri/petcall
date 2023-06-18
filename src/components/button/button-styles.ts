import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type ButtonProps = {
  width?: string;
};

export const Button = styled(TouchableOpacity)<ButtonProps>`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY_DARK};
  border: 0;
  border-radius: 30px;
  padding: 12px 16px;

  width: ${({ width }) => width || "100%"};

  flex-direction: row;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Icon = styled.View`
  margin-right: 8px;
`;
