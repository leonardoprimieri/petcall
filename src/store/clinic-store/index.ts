import { LatLng } from "react-native-maps";
import { create } from "zustand";

type ClinicStore = {
  clinicPosition: LatLng;
  setClinicPosition: (clinicPosition: LatLng) => void;
};

export const useClinicStore = create<ClinicStore>((set) => ({
  clinicPosition: {
    latitude: 0,
    longitude: 0,
  },
  setClinicPosition: (clinicPosition) => set(() => ({ clinicPosition })),
}));
