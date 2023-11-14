import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useEffect, useRef } from "react";
import { Text } from "react-native";

import { BottomModal } from "~/components/bottom-sheet-modal/bottom-sheet-modal";

type Props = {
  selectedClinic: any;
  isOpen: boolean;
};

export const SelectedClinicModal = ({ selectedClinic, isOpen }: Props) => {
  const modalRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.present();
    }
  }, [isOpen]);

  return (
    <BottomModal
      BottomSheetModalProps={{
        snapPoints: ["50%", "50%"],
      }}
      ref={modalRef}
    >
      <Text>{selectedClinic?.title}</Text>
    </BottomModal>
  );
};
