import { ActivityIndicator, FlatList } from "react-native";

import { useLoadVeterinarians } from "./hooks/load-veterinarians";
import { Container } from "./search-vets-screen-styles";

import { HeaderLogo } from "~/components/header-logo/header-logo";
import { VetCard } from "~/components/vet-card/vet-card";
import { DefaultLayout } from "~/layouts/default-layout/default-layout";

export function SearchVetsScreen() {
  const { data, isLoading } = useLoadVeterinarians();

  return (
    <DefaultLayout>
      <Container>
        <HeaderLogo text="Buscar veterinários" />
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.userId}
            renderItem={({ item }) => <VetCard veterinarian={item} />}
            style={{ padding: 20 }}
          />
        )}
      </Container>
    </DefaultLayout>
  );
}
