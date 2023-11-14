import styled from "styled-components/native";

type ContainerProps = {
  backgroundColor?: string;
  padding?: string;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  background-color: ${(props) => props.backgroundColor ?? "transparent"};
  padding: ${(props) => props.padding ?? "0px"};

  border-radius: 4px;

  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;
