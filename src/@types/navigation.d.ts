import { PetEntity } from "~/domain/entities/pet-entity";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: undefined;
      SignUp: undefined;
      Onboarding: undefined;

      RegisterVeterinarian: undefined;
      VeterinarianHome: undefined;
      VeterinarianDetails: {
        veterinarian: VeterinarianEntity;
      };
      VeterinarianAppointments: undefined;
      VeterinarianProfile: undefined;
      RegisterClinic: undefined;

      RegisterPet: undefined;
      MyPets: {
        refetch: boolean;
      };

      ClinicsMap: undefined;
      SearchVets: undefined;
      PetTutorHome: undefined;
      RegisterPetTutor: undefined;
      PetTutorAppointments: undefined;
      PetTutorProfile: undefined;
      EditPet: {
        pet: PetEntity;
      };
    }
  }
}
