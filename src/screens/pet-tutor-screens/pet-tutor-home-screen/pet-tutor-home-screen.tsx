import { useNavigation } from "@react-navigation/native";

import { Container, ItemsContainer } from "./pet-tutor-home-screen-styles";

import { Header } from "~/components/header/header";
import { HomeMenuItem } from "~/components/home-menu-item/home-menu-item";
import { AuthorizedLayout } from "~/layouts/authorized-layout/authorized-layout";

const MENU_ITEMS = [
  {
    label: "Meus Pets",
    image: require("~/assets/my-pets.png"),
    path: "MyPets",
  },
  {
    label: "Meu Perfil",
    image: require("~/assets/placeholder-user.png"),
    path: "PetTutorProfile",
  },
  {
    label: "Procurar Veterinários",
    image: require("~/assets/veterinarian-choice.png"),
    path: "SearchVets",
  },
  {
    label: "Histórico de Consultas",
    image: require("~/assets/medical.png"),
    path: "PetTutorAppointments",
  },
  {
    label: "Mapa de Clínicas",
    image: require("~/assets/world.png"),
    path: "VeterinaryMap",
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
