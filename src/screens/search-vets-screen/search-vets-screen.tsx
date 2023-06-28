import * as S from "./search-vets-screen-styles";
import { HeaderLogo, VetCard } from "@components/index";
import { FlatList } from "react-native";

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
