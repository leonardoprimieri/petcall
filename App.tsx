import { ThemeProvider } from "styled-components/native";
import { SignInScreen } from "./src/screens/sign-in-screen/sign-in-screen";
import theme from "@theme/index";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { Loading } from "./src/components/loading/loading";
import { StatusBar } from "react-native";
import { DefaultLayout } from "./src/layout/default-layout/default-layout";

export default function App() {
  const [isFontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_800ExtraBold,
  });

  if (!isFontsLoaded) return <Loading />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <DefaultLayout>
        <SignInScreen />
      </DefaultLayout>
    </ThemeProvider>
  );
}
