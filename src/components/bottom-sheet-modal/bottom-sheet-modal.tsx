import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetModalProps,
} from "@gorhom/bottom-sheet";
import { forwardRef, useImperativeHandle, useRef } from "react";

type Props = {
  BottomSheetModalProps: Omit<BottomSheetModalProps, "children">;
  children: React.ReactNode;
};

export const BottomModal = forwardRef<any, Props>(function Modal(
  { BottomSheetModalProps, children },
  ref
) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useImperativeHandle(ref, () => ({
    present: () => {
      bottomSheetModalRef.current?.present();
    },
  }));

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        snapPoints={BottomSheetModalProps.snapPoints ?? ["50%", "50%"]}
        {...BottomSheetModalProps}
      >
        {children}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});
