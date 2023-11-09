import { PropsWithChildren } from "react";
import { TouchableOpacityProps } from "react-native";

import { StyledButton, ButtonText, Icon, Loader } from "./button-styles";

type Props = {
  icon?: React.ReactNode;
  width?: string;
  bold?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  isLoading?: boolean;
} & TouchableOpacityProps;

export function Button({
  width = "100%",
  variant = "primary",
  children,
  ...props
}: PropsWithChildren<Props>) {
  const ButtonContent = () => {
    return (
      <>
        {Boolean(props.icon) && <Icon>{props.icon}</Icon>}
        <ButtonText variant={variant} bold={props.bold}>
          {children}
        </ButtonText>
      </>
    );
  };

  return (
    <StyledButton
      disabled={props.disabled ?? props.isLoading}
      width={width}
      variant={variant}
      {...props}
    >
      {props.isLoading && <Loader />}
      {!props.isLoading && <ButtonContent />}
    </StyledButton>
  );
}
