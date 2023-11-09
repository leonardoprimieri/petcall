import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { StyleSheet } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { PetEntity } from "~/domain/entities/pet-entity";
import { ModalTitle } from "./appointment-modal-styles";
import { useAuthentication } from "~/hooks";
import { requestAppointmentService } from "~/domain/services/appointment";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";
import { SelectPetStep } from "./components/steps/select-pet-step/select-pet-step";

type Props = {
  veterinarian: VeterinarianEntity;
};

export const AppointmentModal = forwardRef<any, Props>(function Modal(
  { veterinarian },
  ref
) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [selectedPet, setSelectedPet] = useState<PetEntity>();
  const [currentStep, setCurrentStep] = useState(1);

  const snapPoints = useMemo(() => ["25%", "60%"], []);

  useImperativeHandle(ref, () => ({
    present: () => {
      bottomSheetModalRef.current?.present();
    },
  }));

  const { userDetails } = useAuthentication();

  const handleConfirmAppointment = () => {
    if (!selectedPet) return;

    requestAppointmentService({
      veterinarianDetails: veterinarian,
      requestStatus: "pending",
      tutorDetails: {
        fullName: userDetails?.fullName,
        imageUrl: userDetails?.imageUrl,
        id: userDetails?.userId,
      },
      petDetails: selectedPet,
    });
  };

  const steps: Record<number, React.ReactNode> = {
    1: (
      <SelectPetStep
        selectedPet={selectedPet}
        setSelectedPet={setSelectedPet}
      />
    ),
  };

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        style={styles.contentContainer}
      >
        <ModalTitle>Qual pet precisa de consulta?</ModalTitle>
        {steps[currentStep]}
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
