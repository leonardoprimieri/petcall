import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import { StyleSheet } from "react-native";

import {
  PetCard,
  PetImage,
  PetImageWrapper,
  PetName,
} from "./select-pet-step-styles";

import { PetEntity } from "~/domain/entities/pet-entity";
import { useLoadPets } from "~/screens/pet-tutor-screens/my-pets-screen/hooks/use-load-pets";

type Props = {
  selectedPet: PetEntity | undefined;
  setSelectedPet: (pet: PetEntity) => void;
};

export const SelectPetStep = ({ selectedPet, setSelectedPet }: Props) => {
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
    [selectedPet?.name],
  );

  return (
    <>
      <BottomSheetScrollView
        horizontal
        contentContainerStyle={styles.contentContainer}
      >
        {pets?.map(renderItem)}
      </BottomSheetScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    gap: 16,
    padding: 16,
  },
});
