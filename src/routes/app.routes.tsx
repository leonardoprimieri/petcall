import { useAuthentication } from "@hooks/auth/use-authentication";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingScreen } from "@screens/onboarding-screen/onboarding-screen";
import { RegisterVeterinarianScreen } from "@screens/register-veterinarian-screen/register-veterinarian-screen";
import { SearchVetsScreen } from "@screens/search-vets-screen/search-vets-screen";
import { SignInScreen } from "@screens/sign-in-screen/sign-in-screen";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  const { authenticatedUser, userDetails } = useAuthentication();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {authenticatedUser ? (
        <>
          <Screen name="Onboarding" component={OnboardingScreen} />
          <Screen name="SearchVets" component={SearchVetsScreen} />
          <Screen
            name="RegisterVeterinarian"
            component={RegisterVeterinarianScreen}
          />
        </>
      ) : (
        <Screen name="SignIn" component={SignInScreen} />
      )}
    </Navigator>
  );
};
