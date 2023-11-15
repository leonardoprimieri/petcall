import {} from "@gorhom/bottom-sheet";
import { forwardRef } from "react";
import { TextInputProps as RNInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import {
  Container,
  ErrorMessage,
  InfoContainer,
  Label,
  LabelContainer,
  StyledInput,
} from "./text-input-styles";

import { IconButton } from "~/components/icon-button/icon-button";
import { InfoIcon } from "~/components/icons";

export type TextInputProps = {
  width?: string;
  invalid?: boolean;
  errorMessage?: string;
  label?: string;
  TooltipProps?: {
    onPress: () => void;
  };
} & RNInputProps;

export const TextInput = forwardRef<any, TextInputProps>(
  function Input(props, ref) {
    const { COLORS } = useTheme();

    return (
      <Container width={props.width}>
        <LabelContainer>
          {props.label && <Label>{props.label}</Label>}
          {props.TooltipProps && (
            <IconButton onPress={props.TooltipProps.onPress}>
              <InfoContainer>
                <Label>Importante</Label>
                <InfoIcon size={20} color={COLORS.PRIMARY} weight="bold" />
              </InfoContainer>
            </IconButton>
          )}
        </LabelContainer>
        <StyledInput
          width={props.width}
          placeholderTextColor={COLORS.PARAGRAPH}
          ref={ref}
          {...props}
        />
        {props.errorMessage && (
          <ErrorMessage>{props.errorMessage}</ErrorMessage>
        )}
      </Container>
    );
  },
);
