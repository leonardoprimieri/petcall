import { useNavigation } from "@react-navigation/native";
import { ROUTES_NAMES } from "@routes/routes.names.const";

export const useNavigationRoutes = () => {
  const { navigate } = useNavigation();

  const handleGoToOnboarding = () => navigate(ROUTES_NAMES.ONBOARDING);
  const handleGoToSearchVets = () => navigate(ROUTES_NAMES.SEARCH_VETS);

  return {
    handleGoToOnboarding,
    handleGoToSearchVets,
  };
};
