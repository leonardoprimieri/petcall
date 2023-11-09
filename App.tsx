import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { ThemeProvider } from "styled-components/native";

import { Loading } from "./src/components/loading/loading";
import { DefaultLayout } from "./src/layouts/default-layout/default-layout";

import { Routes } from "~/routes";
import theme from "~/theme";

export default function App() {
  const [isFontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_800ExtraBold,
  });

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar hidden />
        <DefaultLayout>
          {isFontsLoaded ? <Routes /> : <Loading />}
        </DefaultLayout>
        <Toast />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
