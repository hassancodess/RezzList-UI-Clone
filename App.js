import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/navigation/AppNavigation";
import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { theme } from "./src/theme/paperTheme";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer onReady={onLayoutRootView} theme={theme}>
        <AppNavigation />
        <StatusBar style="auto" animated translucent />
      </NavigationContainer>
    </PaperProvider>
  );
}
