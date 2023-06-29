import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingScreen } from "@screens/onboarding-screen/onboarding-screen";
import { SearchVetsScreen } from "@screens/search-vets-screen/search-vets-screen";
import { SignInScreen } from "@screens/sign-in-screen/sign-in-screen";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={SignInScreen} />
      <Screen name="Onboarding" component={OnboardingScreen} />
      <Screen name="SearchVets" component={SearchVetsScreen} />
    </Navigator>
  );
};
