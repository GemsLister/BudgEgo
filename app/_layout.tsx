import "@/global.css";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Google-Sans-Flex-Regular": require("@/assets/fonts/static/GoogleSansFlex_120pt-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) return null;
  return <Stack screenOptions={{ headerShown: false }} />;
}
