import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormContainer } from "./add-pet-note-modal-styles";
import { useAppointment } from "../../../../hooks/use-appointment";

import { Button } from "~/components/button/button";
import { ControlledTextInput } from "~/components/form";

export const AddNotePetModal = forwardRef<any, any>(function Modal(any, ref) {
  const { handleFinishAppointment } = useAppointment();

  const methods = useForm();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ["10%", "100%"], []);

  useImperativeHandle(ref, () => ({
    present: () => {
      bottomSheetModalRef.current?.present();
    },
  }));

  const onSubmit = (data: any) => {
    handleFinishAppointment({
      wasRejected: false,
      note: data?.note || "Nenhuma observação foi adicionada",
    });
  };

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
      >
        <FormProvider {...methods}>
          <FormContainer>
            <ControlledTextInput
              name="note"
              label="Adicione notas pós consulta"
              multiline
              numberOfLines={10}
              maxLength={500}
            />
            <Button onPress={methods.handleSubmit(onSubmit)} width="300px">
              Confirmar e Finalizar
            </Button>
          </FormContainer>
        </FormProvider>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});
