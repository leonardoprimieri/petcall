import { HeaderLogo } from "@components/header-logo/header-logo";
import * as S from "./search-vets-screen-styles";
import { FlatList } from "react-native";
import { VetCard } from "@components/vet-card/vet-card";

export function SearchVetsScreen() {
  return (
    <S.Container>
      <HeaderLogo text="Buscar veterinários" />
      <FlatList
        data={[1, 2, 3]}
        keyExtractor={(item) => item.toString()}
        renderItem={() => <VetCard />}
        style={{ padding: 20 }}
      />
    </S.Container>
  );
}
