import {
  DOG_BRANDS,
  CAT_BRANDS,
  BIRD_BRANDS,
  GUINEA_PIG_BRANDS,
} from "./pet-type-based-brands.const";

export const mappedPetTypes: Record<
  string,
  {
    label: string;
    value: string;
  }[]
> = {
  dog: DOG_BRANDS,
  cat: CAT_BRANDS,
  bird: BIRD_BRANDS,
  guineaPig: GUINEA_PIG_BRANDS,
};
