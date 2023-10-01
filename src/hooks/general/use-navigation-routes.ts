import { useNavigation } from "@react-navigation/native";

export const useNavigationRoutes = () => {
  const { navigate } = useNavigation();

  const handleGoToOnboarding = () => navigate("Onboarding");
  const handleGoToSearchVets = () => navigate("SearchVets");
  const handleGoToRegisterVeterinarian = () => navigate("RegisterVeterinarian");
  const handleGoToSignUp = () => navigate("SignUp");
  const handleGoToVeterinarianHomeScreen = () => navigate("VeterinarianHome");

  const handleGoToPetTutorHomeScreen = () => navigate("PetTutorHome");
  const handleGoToRegisterPetTutor = () => navigate("RegisterPetTutor");

  return {
    handleGoToOnboarding,
    handleGoToSearchVets,
    handleGoToRegisterVeterinarian,
    handleGoToSignUp,
    handleGoToVeterinarianHomeScreen,
    handleGoToPetTutorHomeScreen,
    handleGoToRegisterPetTutor,
  };
};
