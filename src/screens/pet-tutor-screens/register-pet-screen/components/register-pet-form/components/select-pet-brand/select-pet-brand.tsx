import { mappedPetTypes } from "./constants/mapped-pet-types";
import { PET_TYPES } from "./constants/pet-types.const";
import { SelectContainer } from "./select-pet-brand-styles";

import { Select } from "~/components/select/select";

type Props = {
  selectedBrand: string;
  setSelectedBrand: (value: string) => void;
  selectedPetType: string;
  setSelectedPetType: (value: string) => void;
};

export const SelectPetBrand = ({
  selectedBrand,
  selectedPetType,
  setSelectedBrand,
  setSelectedPetType,
}: Props) => {
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
        options={mappedPetTypes[selectedPetType]}
        selectedValue={selectedBrand}
        setSelectedValue={setSelectedBrand}
        label="Raça"
      />
    </SelectContainer>
  );
};
