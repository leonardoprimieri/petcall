import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";

import {
  MissingPetsInfo,
  MissingPetsInfoContainer,
  PetCard,
  PetImage,
  PetImageWrapper,
  PetName,
  RegisterPetLink,
} from "./select-pet-step-styles";

import { Button } from "~/components/button/button";
import { PetEntity } from "~/domain/entities/pet-entity";
import { useLoadPets } from "~/screens/pet-tutor-screens/my-pets-screen/hooks/use-load-pets";

type Props = {
  selectedPet: PetEntity | undefined;
  buttonLabel: string;
  setSelectedPet: (pet: PetEntity) => void;
  onConfirm: () => void;
};

export const SelectPetStep = ({
  selectedPet,
  setSelectedPet,
  onConfirm,
  buttonLabel,
}: Props) => {
  const { pets, isLoading } = useLoadPets();

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

  if (!isLoading && !pets.length)
    return (
      <MissingPetsInfoContainer>
        <MissingPetsInfo>
          Para consultar, você precisa{" "}
          <RegisterPetLink to="/MyPets">cadastrar um pet</RegisterPetLink>
        </MissingPetsInfo>
      </MissingPetsInfoContainer>
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
          onPress={onConfirm}
          disabled={!selectedPet}
        >
          {buttonLabel}
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 32,
    gap: 8,
  },
});
