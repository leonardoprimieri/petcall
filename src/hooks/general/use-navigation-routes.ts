import { useNavigation } from "@react-navigation/native";
import { VeterinarianEntity } from "~/domain/entities/veterinarian-entity";

export const useNavigationRoutes = () => {
  const { navigate } = useNavigation();

  const handleGoToOnboarding = () => navigate("Onboarding");
  const handleGoToSearchVets = () => navigate("SearchVets");
  const handleGoToRegisterVeterinarian = () => navigate("RegisterVeterinarian");
  const handleGoToSignUp = () => navigate("SignUp");
  const handleGoToVeterinarianHomeScreen = () => navigate("VeterinarianHome");

  const handleGoToPetTutorHomeScreen = () => navigate("PetTutorHome");
  const handleGoToRegisterPetTutor = () => navigate("RegisterPetTutor");
  const handleGoToMyPets = () => navigate("MyPets");
  const handleGoToVeterinarianDetails = (veterinarian: VeterinarianEntity) =>
    navigate("VeterinarianDetails", {
      veterinarian,
    });

  const handleGoToRegisterPet = () => navigate("RegisterPet");
  const handleGoToPetTutorAppointments = () => navigate("PetTutorAppointments");
  const handleGoToVeterinarianAppointments = () =>
    navigate("VeterinarianAppointments");

  return {
    handleGoToOnboarding,
    handleGoToSearchVets,
    handleGoToRegisterVeterinarian,
    handleGoToSignUp,
    handleGoToVeterinarianHomeScreen,
    handleGoToPetTutorHomeScreen,
    handleGoToRegisterPetTutor,
    handleGoToVeterinarianDetails,
    handleGoToMyPets,
    handleGoToRegisterPet,
    handleGoToPetTutorAppointments,
    handleGoToVeterinarianAppointments,
  };
};
