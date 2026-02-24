import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppProvider } from "./src/context/AppContext";
import { MaskProvider } from "./src/context/MaskContext";
import { useGlobalFonts } from "./src/hooks/useGlobalFonts";
import HomeScreen from "./src/screens/HomeScreen";
import SplashScreen from "./src/screens/SplashScreen";

const SPLASH_DURATION_MS = 3200;

export default function App() {
  useGlobalFonts();
  const [showSplash, setShowSplash] = useState(true);
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        setShowSplash(false);
      });
    }, SPLASH_DURATION_MS);

    return () => clearTimeout(timer);
  }, []);

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1000],
  });

  return (
    <SafeAreaProvider>
      <AppProvider>
        <MaskProvider>
          <StatusBar style="auto" />
          <HomeScreen />

          {showSplash && (
            <Animated.View
              style={[
                StyleSheet.absoluteFillObject,
                { transform: [{ translateY }] },
              ]}
            >
              <SplashScreen />
            </Animated.View>
          )}
        </MaskProvider>
      </AppProvider>
    </SafeAreaProvider>
  );
}
