import { ComponentProps, PropsWithChildren } from "react";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

type Props = ComponentProps<typeof KeyboardAvoidingView>;

export const KeyboardContainer = ({
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior="padding"
        {...props}
      >
        {children}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
