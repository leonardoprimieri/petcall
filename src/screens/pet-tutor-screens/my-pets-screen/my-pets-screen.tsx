import { HeaderLogo } from "~/components/header-logo/header-logo";
import { Container } from "./my-pets-screen-styles";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";
import { useLoadPets } from "./hooks/use-load-pets";
import { ActivityIndicator, FlatList } from "react-native";
import { PetCard } from "./components/pet-card/pet-card";

import { Button } from "~/components/button/button";
import { useNavigationRoutes } from "~/hooks";

export function MyPetsScreen() {
  const { pets, isLoading } = useLoadPets();

  const { handleGoToRegisterPet } = useNavigationRoutes();

  return (
    <DefaultLayout>
      <Container>
        <HeaderLogo text="Meus Pets" />
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={pets}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <PetCard pet={item} />}
            numColumns={2}
          />
        )}

        <Button onPress={handleGoToRegisterPet}>Cadastrar Pet</Button>
      </Container>
    </DefaultLayout>
  );
}
