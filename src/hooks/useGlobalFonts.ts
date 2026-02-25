import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { Text } from "react-native";

export function useGlobalFonts() {
  const [fontsLoaded] = useFonts({
    Coolvetica: require("../../assets/fonts/coolvetica_rg.ttf"),
    CoolveticaBold: require("../../assets/fonts/CoolveticaRg-Bold.ttf"),
  });
  const [fontsApplied, setFontsApplied] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      (Text as any).defaultProps = (Text as any).defaultProps || {};
      (Text as any).defaultProps.style = [
        { fontFamily: "Coolvetica" },
        (Text as any).defaultProps.style,
      ];
      setFontsApplied(true);
    }
  }, [fontsLoaded]);

  return fontsApplied;
}
