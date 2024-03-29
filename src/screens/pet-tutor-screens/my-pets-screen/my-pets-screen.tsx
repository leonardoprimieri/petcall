import { FlatList } from "react-native";

import { PetCard } from "./components/pet-card/pet-card";
import { useLoadPets } from "./hooks/use-load-pets";
import { Container } from "./my-pets-screen-styles";

import { Button } from "~/components/button/button";
import { HeaderLogo } from "~/components/header-logo/header-logo";
import { Loading } from "~/components/loading/loading";
import { useNavigationRoutes } from "~/hooks";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

type RouteParams = {
  route: {
    params: {
      refetch: boolean;
    };
  };
};

export function MyPetsScreen({ route }: RouteParams) {
  const { pets, isLoading } = useLoadPets({
    refetch: route?.params?.refetch ?? false,
  });

  const { handleGoToRegisterPet } = useNavigationRoutes();

  if (isLoading) return <Loading />;

  return (
    <DefaultLayout>
      <Container>
        <HeaderLogo text="Meus Pets" />

        <FlatList
          data={pets}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <PetCard pet={item} />}
        />

        <Button onPress={handleGoToRegisterPet}>Cadastrar Pet</Button>
      </Container>
    </DefaultLayout>
  );
}
