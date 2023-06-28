import { TouchableOpacity } from "react-native";

type Props = {
  children: React.ReactNode;
};

export const IconButton = ({ children }: Props) => {
  return <TouchableOpacity>{children}</TouchableOpacity>;
};
