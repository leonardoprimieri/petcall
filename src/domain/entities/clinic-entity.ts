import { LatLng } from "react-native-maps";

import { VeterinarianEntity } from "./veterinarian-entity";

export type ClinicEntity = {
  name: string;
  location: LatLng;
  phone: string;
  imageUrl: string;
  id?: string;
  email: string;
  complement: string;
  veterinarianDetails: VeterinarianEntity;
};
