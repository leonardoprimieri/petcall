import { ImageProps } from "react-native";

import { Container, RoundedImage } from "./avatar-styles";
import avatarPlaceholder from "../../assets/placeholder-user.png";

type Props = {
  url?: string;
  size: number;
  removeBorder?: boolean;
} & Omit<ImageProps, "source">;

export const Avatar = ({
  url,
  size,
  removeBorder = false,
  ...props
}: Props) => {
  if (removeBorder)
    return (
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
    );

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
