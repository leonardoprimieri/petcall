import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UserTypeEnum } from "~/enums/user-type.enum";
import { useAuthentication } from "~/hooks/auth/use-authentication";
import {
  MyPetsScreen,
  PetTutorAppointmentsScreen,
  PetTutorHomeScreen,
  PetTutorProfileScreen,
  RegisterPetScreen,
  RegisterPetTutorScreen,
  SearchVetsScreen,
  VeterinarianDetailsScreen,
} from "~/screens/pet-tutor-screens";
import {
  OnboardingScreen,
  SignInScreen,
  SignUpScreen,
} from "~/screens/user-screens";
import {
  RegisterVeterinarianScreen,
  VeterinarianAppointmentsScreen,
  VeterinarianHomeScreen,
  VeterinarianProfileScreen,
} from "~/screens/veterinarian-screens";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  const { authenticatedUser, userDetails } = useAuthentication();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {authenticatedUser && userDetails ? (
        <>
          {userDetails?.userType === UserTypeEnum.PET_TUTOR && (
            <>
              <Screen name="PetTutorHome" component={PetTutorHomeScreen} />
              <Screen name="SearchVets" component={SearchVetsScreen} />
              <Screen
                name="VeterinarianDetails"
                component={VeterinarianDetailsScreen as any}
              />
              <Screen name="MyPets" component={MyPetsScreen as any} />
              <Screen name="RegisterPet" component={RegisterPetScreen} />
              <Screen
                name="PetTutorAppointments"
                component={PetTutorAppointmentsScreen}
              />
              <Screen
                name="PetTutorProfile"
                component={PetTutorProfileScreen}
              />
            </>
          )}

          {userDetails?.userType === UserTypeEnum.VETERINARIAN && (
            <>
              <Screen
                name="VeterinarianHome"
                component={VeterinarianHomeScreen}
              />
              <Screen
                name="VeterinarianAppointments"
                component={VeterinarianAppointmentsScreen}
              />
              <Screen
                name="VeterinarianProfile"
                component={VeterinarianProfileScreen}
              />
            </>
          )}
        </>
      ) : (
        <>
          <Screen name="SignIn" component={SignInScreen} />
          <Screen name="SignUp" component={SignUpScreen} />
          <Screen name="Onboarding" component={OnboardingScreen} />
          <Screen
            name="RegisterVeterinarian"
            component={RegisterVeterinarianScreen}
          />
          <Screen name="RegisterPetTutor" component={RegisterPetTutorScreen} />
        </>
      )}
    </Navigator>
  );
};
