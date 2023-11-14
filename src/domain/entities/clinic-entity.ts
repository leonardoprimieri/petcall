import { LatLng } from "react-native-maps";

export type ClinicEntity = {
  name: string;
  location: LatLng;
  phone: string;
  imageUrl: string;
  id?: string;
  email: string;
  complement: string;
};
