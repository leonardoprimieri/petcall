import { Header } from "~/components/header/header";
import { Container, ItemsContainer } from "./pet-tutor-home-screen-styles";
import { AuthorizedLayout } from "~/layouts/authorized-layout/authorized-layout";
import { useNavigationRoutes } from "~/hooks";
import { HomeMenuItem } from "~/components/home-menu-item/home-menu-item";

export const PetTutorHomeScreen = () => {
  const { handleGoToSearchVets } = useNavigationRoutes();

  return (
    <AuthorizedLayout>
      <Container>
        <Header />
        <ItemsContainer>
          <HomeMenuItem
            label="Procurar Veterinários"
            ImageProps={{
              source: require("~/assets/veterinarian-choice.png"),
            }}
            onPress={handleGoToSearchVets}
          />
        </ItemsContainer>
      </Container>
    </AuthorizedLayout>
  );
};
