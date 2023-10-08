import { Image, ImageProps } from "react-native";
import avatarPlaceholder from "../../assets/placeholder-user.png";
import { Container } from "./avatar-styles";

type Props = {
  source?: string;
} & Omit<ImageProps, "source">;

export const Avatar = ({ source, ...props }: Props) => {
  return (
    <Container>
      <Image source={source ?? avatarPlaceholder} {...props} />
    </Container>
  );
};
