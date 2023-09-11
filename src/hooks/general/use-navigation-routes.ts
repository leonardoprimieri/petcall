import { useNavigation } from "@react-navigation/native";
import { ROUTES_NAMES } from "@routes/routes.names.const";

export const useNavigationRoutes = () => {
  const { navigate } = useNavigation();

  const handleGoToOnboarding = () => navigate(ROUTES_NAMES.ONBOARDING);
  const handleGoToSearchVets = () => navigate(ROUTES_NAMES.SEARCH_VETS);
  const handleGoToRegisterVeterinarian = () =>
    navigate(ROUTES_NAMES.REGISTER_VETERINARIAN);
  const handleGoToSignUp = () => navigate(ROUTES_NAMES.SIGN_UP);

  return {
    handleGoToOnboarding,
    handleGoToSearchVets,
    handleGoToRegisterVeterinarian,
    handleGoToSignUp,
  };
};
