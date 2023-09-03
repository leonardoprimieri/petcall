import { useAuthentication } from "@hooks/auth/use-authentication";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingScreen } from "@screens/onboarding-screen/onboarding-screen";
import { SearchVetsScreen } from "@screens/search-vets-screen/search-vets-screen";
import { SignInScreen } from "@screens/sign-in-screen/sign-in-screen";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  const { user } = useAuthentication();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <>
          <Screen name="Onboarding" component={OnboardingScreen} />
          <Screen name="SearchVets" component={SearchVetsScreen} />
        </>
      ) : (
        <Screen name="SignIn" component={SignInScreen} />
      )}
    </Navigator>
  );
};
