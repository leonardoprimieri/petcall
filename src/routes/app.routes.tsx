import { UserTypeEnum } from "~/enums/user-type.enum";
import { useAuthentication } from "~/hooks/auth/use-authentication";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingScreen } from "~/screens/onboarding-screen/onboarding-screen";
import { RegisterVeterinarianScreen } from "~/screens/register-veterinarian-screen/register-veterinarian-screen";
import { SearchVetsScreen } from "~/screens/search-vets-screen/search-vets-screen";
import { SignInScreen } from "~/screens/sign-in-screen/sign-in-screen";
import { SignUpScreen } from "~/screens/sign-up-screen/sign-up-screen";
import { VeterinarianHomeScreen } from "~/screens/veterinarian-home-screen/veterinarian-home-screen";

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
          {userDetails?.userType === UserTypeEnum.PET_TUTOR && (
            <Screen name="SearchVets" component={SearchVetsScreen} />
          )}
          {userDetails?.userType === UserTypeEnum.VETERINARIAN &&
            !userDetails?.crmv && (
              <Screen
                name="RegisterVeterinarian"
                component={RegisterVeterinarianScreen}
              />
            )}
          {userDetails?.userType === UserTypeEnum.VETERINARIAN && (
            <Screen
              name="VeterinarianHome"
              component={VeterinarianHomeScreen}
            />
          )}

          {!userDetails?.userType && (
            <Screen name="Onboarding" component={OnboardingScreen} />
          )}
        </>
      ) : (
        <>
          <Screen name="SignIn" component={SignInScreen} />
          <Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Navigator>
  );
};
