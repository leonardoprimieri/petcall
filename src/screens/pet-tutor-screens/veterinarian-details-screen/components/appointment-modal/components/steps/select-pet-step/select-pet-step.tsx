import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";

import {
  PetCard,
  PetImage,
  PetImageWrapper,
  PetName,
} from "./select-pet-step-styles";

import { Button } from "~/components/button/button";
import { PetEntity } from "~/domain/entities/pet-entity";
import { useLoadPets } from "~/screens/pet-tutor-screens/my-pets-screen/hooks/use-load-pets";

type Props = {
  selectedPet: PetEntity | undefined;
  setSelectedPet: (pet: PetEntity) => void;
  handleNextStep: () => void;
};

export const SelectPetStep = ({
  selectedPet,
  setSelectedPet,
  handleNextStep,
}: Props) => {
  const { pets } = useLoadPets();

  const renderItem = useCallback(
    (item: PetEntity) => (
      <PetCard
        key={item?.name}
        onPress={() => {
          setSelectedPet(item);
        }}
      >
        <PetImageWrapper isSelected={selectedPet?.name === item?.name}>
          <PetImage
            source={{
              uri: item?.imageUrl,
            }}
            resizeMode="cover"
          />
        </PetImageWrapper>
        <PetName isSelected={selectedPet?.name === item?.name}>
          {item?.name}
        </PetName>
      </PetCard>
    ),
    [selectedPet?.name]
  );

  return (
    <>
      <BottomSheetScrollView
        horizontal
        contentContainerStyle={styles.contentContainer}
      >
        {pets?.map(renderItem)}
      </BottomSheetScrollView>
      <View style={{ paddingHorizontal: 32 }}>
        <Button
          style={{ marginBottom: 24 }}
          onPress={handleNextStep}
          disabled={!selectedPet}
        >
          Ir para o pagamento
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
    gap: 8,
  },
});
