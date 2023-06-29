import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = {
  children: React.ReactNode;
} & TouchableOpacityProps;

export const IconButton = ({ children, ...props }: Props) => {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
};
