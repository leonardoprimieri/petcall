import Toast from "react-native-toast-message";
import { ThemeProvider } from "styled-components/native";

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
import theme from "~/theme";
import { Routes } from "~/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
