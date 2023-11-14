import { TouchableOpacityProps } from "react-native";

import { Container } from "./icon-button-styles";

type Props = {
  children: React.ReactNode;
  backgroundColor?: string;
  padding?: string;
} & TouchableOpacityProps;

export const IconButton = ({
  children,
  backgroundColor,
  padding,
  ...props
}: Props) => {
  return (
    <Container padding={padding} backgroundColor={backgroundColor} {...props}>
      {children}
    </Container>
  );
};
