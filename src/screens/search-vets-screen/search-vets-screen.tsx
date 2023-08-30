import { HeaderLogo } from "@components/header-logo/header-logo";
import * as S from "./search-vets-screen-styles";
import { FlatList } from "react-native";
import { VetCard } from "@components/vet-card/vet-card";
import { DefaultLayout } from "@layouts/default-layout/default-layout";

export function SearchVetsScreen() {
  return (
    <DefaultLayout>
      <S.Container>
        <HeaderLogo text="Buscar veterinários" />
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          keyExtractor={(item) => item.toString()}
          renderItem={() => <VetCard />}
          style={{ padding: 20 }}
        />
      </S.Container>
    </DefaultLayout>
  );
}
