import { Header } from "~/components/header/header";
import { Container, ItemsContainer } from "./pet-tutor-home-screen-styles";
import { AuthorizedLayout } from "~/layouts/authorized-layout/authorized-layout";
import { HomeMenuItem } from "~/components/home-menu-item/home-menu-item";
import { useNavigation } from "@react-navigation/native";

const MENU_ITEMS = [
  {
    label: "Procurar Veterinários",
    image: require("~/assets/veterinarian-choice.png"),
    path: "SearchVets",
  },
  {
    label: "Meus Pets",
    image: require("~/assets/my-pets.png"),
    path: "MyPets",
  },
];

export const PetTutorHomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <AuthorizedLayout>
      <Container>
        <Header />
        <ItemsContainer>
          {MENU_ITEMS.map((item) => (
            <HomeMenuItem
              key={item.label}
              label={item.label}
              ImageProps={{
                source: item.image,
              }}
              onPress={() => navigate(item.path as any)}
            />
          ))}
        </ItemsContainer>
      </Container>
    </AuthorizedLayout>
  );
};
