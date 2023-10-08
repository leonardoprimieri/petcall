import { VeterinarianEntity } from "~/domain/entity/veterinarian-entity";

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
    }
  }
}
