import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: undefined;
      SignUp: undefined;
      Onboarding: undefined;
      SearchVets: undefined;
      RegisterVeterinarian: undefined;
      VeterinarianHome: undefined;
      PetTutorHome: undefined;
      RegisterPetTutor: undefined;
      VeterinarianDetails: {
        veterinarian: VeterinarianEntity;
      };
      MyPets: undefined;
      RegisterPet: undefined;
      PetTutorAppointments: undefined;
    }
  }
}
