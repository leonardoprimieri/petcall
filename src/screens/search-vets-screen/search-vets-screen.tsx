import { Container } from "./search-vets-screen-styles";
import { FlatList } from "react-native";
import { VetCard } from "@components/vet-card/vet-card";
import { DefaultLayout } from "@layouts/default-layout/default-layout";
import { useLoadVeterinarians } from "./hooks/load-veterinarians";
import { HeaderLogo } from "@components/header-logo/header-logo";

export function SearchVetsScreen() {
  const { data } = useLoadVeterinarians();

  return (
    <DefaultLayout>
      <Container>
        <HeaderLogo text="Buscar veterinários" />
        <FlatList
          data={data}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => <VetCard veterinary={item} />}
          style={{ padding: 20 }}
        />
      </Container>
    </DefaultLayout>
  );
}
