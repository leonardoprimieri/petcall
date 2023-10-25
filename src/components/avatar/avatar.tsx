import { Image, ImageProps } from "react-native";
import avatarPlaceholder from "../../assets/placeholder-user.png";
import { Container, RoundedImage } from "./avatar-styles";

type Props = {
  url?: string;
} & Omit<ImageProps, "source">;

export const Avatar = ({ url, ...props }: Props) => {
  return (
    <Container>
      <RoundedImage
        source={
          url
            ? {
                uri: url,
              }
            : avatarPlaceholder
        }
        {...props}
      />
    </Container>
  );
};
