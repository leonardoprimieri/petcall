import { Image, ImageProps } from "react-native";
import avatarPlaceholder from "../../assets/placeholder-user.png";
import { Container, RoundedImage } from "./avatar-styles";

type Props = {
  url?: string;
  size: number;
} & Omit<ImageProps, "source">;

export const Avatar = ({ url, size, ...props }: Props) => {
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
        style={{
          height: size,
          width: size,
        }}
        {...props}
      />
    </Container>
  );
};
