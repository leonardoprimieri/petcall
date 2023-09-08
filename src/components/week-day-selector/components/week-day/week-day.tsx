import { TouchableOpacityProps } from "react-native";
import { Container, Day } from "./week-day-styles";

type Props = {
  children: React.ReactNode;
  isSelected?: boolean;
} & TouchableOpacityProps;

export const WeekDay = ({ children, isSelected, ...props }: Props) => {
  return (
    <Container isSelected={isSelected} {...props}>
      <Day>{children}</Day>
    </Container>
  );
};
