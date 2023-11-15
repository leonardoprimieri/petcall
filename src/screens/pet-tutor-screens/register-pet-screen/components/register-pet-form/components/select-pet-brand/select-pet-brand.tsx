import { useState } from "react";

import {
  BIRD_BRANDS,
  CAT_BRANDS,
  DOG_BRANDS,
} from "./constants/pet-type-based-brands.const";
import { PET_TYPES } from "./constants/pet-types.const";
import { SelectContainer } from "./select-pet-brand-styles";

import { Select } from "~/components/select/select";

export const SelectPetBrand = () => {
  const [selectedPetType, setSelectedPetType] = useState("dog");

  const [selectedBrand, setSelectedBrand] = useState("");

  const petTypes: Record<
    string,
    {
      label: string;
      value: string;
    }[]
  > = {
    dog: DOG_BRANDS,
    cat: CAT_BRANDS,
    bird: BIRD_BRANDS,
  };

  return (
    <SelectContainer>
      <Select
        width="300px"
        options={PET_TYPES}
        selectedValue={selectedPetType}
        setSelectedValue={setSelectedPetType}
        label="Tipo de pet"
      />
      <Select
        width="300px"
        options={petTypes[selectedPetType] || petTypes["dog"]}
        selectedValue={selectedBrand}
        setSelectedValue={setSelectedBrand}
        label="Raça"
      />
    </SelectContainer>
  );
};
