import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { StyleSheet } from "react-native";

import { ModalTitle } from "./appointment-modal-styles";
import { SelectPetStep } from "./components/steps/select-pet-step/select-pet-step";

import { Button } from "~/components/button/button";
import { PetEntity } from "~/domain/entities/pet-entity";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";
// import { requestAppointmentService } from "~/domain/services/appointment";
// import { useAuthentication } from "~/hooks";

type Props = {
  veterinarian: VeterinarianEntity;
};

export const AppointmentModal = forwardRef<any, Props>(function Modal(
  { veterinarian },
  ref,
) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [selectedPet, setSelectedPet] = useState<PetEntity>();
  const [currentStep] = useState(1);

  const snapPoints = useMemo(() => ["40%", "50%"], []);

  useImperativeHandle(ref, () => ({
    present: () => {
      bottomSheetModalRef.current?.present();
    },
  }));

  // const { userDetails } = useAuthentication();

  // const handleConfirmAppointment = () => {
  //   if (!selectedPet) return;

  //   requestAppointmentService({
  //     veterinarianDetails: veterinarian,
  //     requestStatus: "pending",
  //     tutorDetails: {
  //       fullName: userDetails?.fullName,
  //       imageUrl: userDetails?.imageUrl,
  //       id: userDetails?.userId,
  //     },
  //     petDetails: selectedPet,
  //   });
  // };

  const steps: Record<
    number,
    {
      title: string;
      content: React.ReactNode;
    }
  > = {
    1: {
      title: "Qual pet precisa de consulta?",
      content: (
        <SelectPetStep
          selectedPet={selectedPet}
          setSelectedPet={setSelectedPet}
        />
      ),
    },
  };

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        style={styles.contentContainer}
      >
        <ModalTitle> {steps[currentStep].title}</ModalTitle>
        {steps[currentStep].content}
        <Button>Ir para o pagamento</Button>
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
