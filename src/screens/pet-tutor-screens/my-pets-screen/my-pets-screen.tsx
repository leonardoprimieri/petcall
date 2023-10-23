import { HeaderLogo } from "~/components/header-logo/header-logo";
import { Container } from "./my-pets-screen-styles";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";
import { useLoadPets } from "./hooks/use-load-pets";
import { ActivityIndicator, FlatList } from "react-native";
import { PetCard } from "./components/pet-card/pet-card";

export function MyPetsScreen() {
  const { data, isLoading } = useLoadPets();

  return (
    <DefaultLayout>
      <Container>
        <HeaderLogo text="Seus Pets" />

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.userId}
            renderItem={({ item }) => <PetCard pet={item} />}
            style={{ padding: 20 }}
          />
        )}
      </Container>
    </DefaultLayout>
  );
}
