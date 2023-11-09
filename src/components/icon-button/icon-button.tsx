import { TouchableOpacityProps } from "react-native";

import { Container } from "./icon-button-styles";

type Props = {
  children: React.ReactNode;
} & TouchableOpacityProps;

export const IconButton = ({ children, ...props }: Props) => {
  return <Container {...props}>{children}</Container>;
};
