import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useLoadPets } from "~/screens/pet-tutor-screens/my-pets-screen/hooks/use-load-pets";
import { PetEntity } from "~/domain/entities/pet-entity";
import { Image } from "react-native";
import {
  ModalTitle,
  PetCard,
  PetImage,
  PetName,
} from "./appointment-modal-styles";

export const AppointmentModal = forwardRef<any, any>(function Modal(
  props,
  ref
) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { pets } = useLoadPets();
  const [selectedPet, setSelectedPet] = useState<PetEntity>();

  const snapPoints = useMemo(() => ["25%", "60%"], []);

  useImperativeHandle(ref, () => ({
    present: () => {
      bottomSheetModalRef.current?.present();
    },
  }));

  const renderItem = useCallback(
    (item: PetEntity) => (
      <PetCard
        key={item?.name}
        onPress={() => {
          setSelectedPet(item);
        }}
      >
        <PetImage
          isSelected={selectedPet?.name === item?.name}
          source={{
            uri: item?.imageUrl,
          }}
        />
        <PetName isSelected={selectedPet?.name === item?.name}>
          {item?.name}
        </PetName>
      </PetCard>
    ),
    [selectedPet?.name]
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        style={styles.contentContainer}
      >
        <ModalTitle>Qual pet precisa de consulta?</ModalTitle>
        <BottomSheetScrollView
          horizontal
          contentContainerStyle={styles.contentContainer}
        >
          {pets?.map(renderItem)}
        </BottomSheetScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    gap: 16,
    padding: 16,
  },
});
