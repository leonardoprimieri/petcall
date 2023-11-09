import styled from "styled-components/native";

type ContainerProps = {
  isSelected?: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
  border-radius: 19px;
  padding: 12px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 14px;
`;
