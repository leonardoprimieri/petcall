import { ComponentProps, PropsWithChildren } from "react";
import { KeyboardAvoidingView } from "react-native";

type Props = ComponentProps<typeof KeyboardAvoidingView>;

export const KeyboardContainer = ({
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      behavior="padding"
      {...props}
    >
      {children}
    </KeyboardAvoidingView>
  );
};
