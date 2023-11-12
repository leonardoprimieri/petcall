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

import { ModalTitle } from "./appointment-modal-styles";
import { CreditCardStep } from "./components/steps/credit-card-step/credit-card-step";
import { SelectPetStep } from "./components/steps/select-pet-step/select-pet-step";

import { PetEntity } from "~/domain/entities/pet-entity";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";
import { requestAppointmentService } from "~/domain/services/appointment";
import { handleIsVeterinarianVoluntary } from "~/helpers/handle-is-veterinarian-voluntary";
import { useAuthentication } from "~/hooks";

type Props = {
  veterinarian: VeterinarianEntity;
};

export const AppointmentModal = forwardRef<any, Props>(function Modal(
  { veterinarian },
  ref
) {
  const { userDetails } = useAuthentication();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [selectedPet, setSelectedPet] = useState<PetEntity>();
  const [currentStep, setCurrentStep] = useState(1);

  useImperativeHandle(ref, () => ({
    present: () => {
      bottomSheetModalRef.current?.present();
    },
  }));

  const handleCloseModal = () => {
    bottomSheetModalRef.current?.dismiss();
    setCurrentStep(1);
    setSelectedPet(undefined);
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const { isVoluntary } = handleIsVeterinarianVoluntary({
    veterinarian,
  });

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
    handleCloseModal();
  };

  const steps: Record<
    number,
    {
      title: string;
      content: React.ReactNode;
      snapPointPercentage: string;
    }
  > = {
    1: {
      title: "Qual pet precisa de consulta?",
      content: (
        <SelectPetStep
          selectedPet={selectedPet}
          setSelectedPet={setSelectedPet}
          onConfirm={isVoluntary ? handleConfirmAppointment : handleNextStep}
          buttonLabel={isVoluntary ? "Confirmar" : "Ir para o pagamento"}
        />
      ),
      snapPointPercentage: "40%",
    },
    2: {
      title: "Insira os dados de pagamento",
      content: (
        <CreditCardStep
          handleCloseModal={handleCloseModal}
          selectedPet={selectedPet}
          veterinarian={veterinarian}
          handlePreviousStep={handlePreviousStep}
          handleConfirmAppointment={handleConfirmAppointment}
        />
      ),
      snapPointPercentage: "80%",
    },
  };

  const snapPoints = useMemo(
    () => ["40%", steps[currentStep].snapPointPercentage],
    [steps[currentStep].snapPointPercentage]
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <ModalTitle> {steps[currentStep].title}</ModalTitle>
        {steps[currentStep].content}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});
