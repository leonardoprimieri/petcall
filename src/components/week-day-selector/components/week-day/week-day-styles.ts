import styled from "styled-components/native";

type ContainerProps = {
  isSelected?: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  background: ${({ theme }) => theme.COLORS.SECONDARY_DARK};
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.2)};
`;

export const Day = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED};
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.BOLD};
`;
