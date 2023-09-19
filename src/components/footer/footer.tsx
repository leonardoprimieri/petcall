import { Container } from "./footer-styles";
import { HomeIcon, UserIcon } from "../icons";
import theme from "~/theme";
import { IconButton } from "../icon-button/icon-button";
import { useRoute } from "@react-navigation/native";

const ROUTES = [
  {
    name: "VeterinarianHome",
    icon: HomeIcon,
  },
  {
    name: "Profile",
    icon: UserIcon,
  },
];

export const Footer = () => {
  const route = useRoute();

  return (
    <Container>
      {ROUTES.map(({ icon: Icon, name }) => (
        <IconButton key={name}>
          {
            <Icon
              size={30}
              color={
                route.name === name
                  ? theme.COLORS.PRIMARY
                  : theme.COLORS.PARAGRAPH
              }
            />
          }
        </IconButton>
      ))}
    </Container>
  );
};
