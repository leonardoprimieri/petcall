import { Image } from "react-native";
import avatarPlaceholder from "../../assets/placeholder-user.png";

type Props = {
  url?: string;
};

export const Avatar = ({ url }: Props) => {
  return <Image source={url ?? avatarPlaceholder} />;
};
