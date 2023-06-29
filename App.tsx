import { ThemeProvider } from "styled-components/native";
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
import { DefaultLayout } from "./src/layouts/default-layout/default-layout";
import { Routes } from "@routes/index";

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
      <StatusBar hidden />
      <DefaultLayout>
        <Routes />
      </DefaultLayout>
    </ThemeProvider>
  );
}
