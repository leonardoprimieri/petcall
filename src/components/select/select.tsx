import { Picker } from "@react-native-picker/picker";
import React, { useRef } from "react";

import {
  Container,
  SelectContainer,
  SelectLabel,
  StyledSelect,
} from "./select-styles";

type Props = {
  width: string;
  options: {
    label: string;
    value: string;
  }[];
  selectedValue: string;
  setSelectedValue: (value: any) => void;
  label: string;
};

export const Select = ({
  width,
  options,
  selectedValue,
  setSelectedValue,
  label,
}: Props) => {
  const pickerRef = useRef();

  return (
    <Container>
      <SelectLabel>{label}</SelectLabel>
      <SelectContainer width={width}>
        <StyledSelect
          ref={pickerRef}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedValue(itemValue as string)
          }
        >
          {options.map((option) => (
            <Picker.Item
              key={option.label}
              label={option.label}
              value={option.value}
            />
          ))}
        </StyledSelect>
      </SelectContainer>
    </Container>
  );
};
