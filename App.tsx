import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppProvider } from "./src/context/AppContext";
import { MaskProvider } from "./src/context/MaskContext";
import { useGlobalFonts } from "./src/hooks/useGlobalFonts";
import HomeScreen from "./src/screens/HomeScreen";
import SplashScreen from "./src/screens/SplashScreen";

const SPLASH_DURATION_MS = 3200;

export default function App() {
  const fontsLoaded = useGlobalFonts();
  const [showSplash, setShowSplash] = useState(true);
  const [timerElapsed, setTimerElapsed] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const logoOpacity = useRef(new Animated.Value(1)).current;
  const contentAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => setTimerElapsed(true), SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (timerElapsed && fontsLoaded) {
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 350,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowSplash(false);
        Animated.spring(contentAnim, {
          toValue: 1,
          tension: 200,
          friction: 18,
          useNativeDriver: true,
        }).start();
      });
    }
  }, [timerElapsed, fontsLoaded]);

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1000],
  });

  return (
    <SafeAreaProvider>
      <AppProvider>
        <MaskProvider>
          <StatusBar style="auto" />
          {fontsLoaded && <HomeScreen contentAnim={contentAnim} />}

          {showSplash && (
            <Animated.View
              style={[
                StyleSheet.absoluteFillObject,
                { transform: [{ translateY }] },
              ]}
            >
              <SplashScreen logoOpacity={logoOpacity} />
            </Animated.View>
          )}
        </MaskProvider>
      </AppProvider>
    </SafeAreaProvider>
  );
}
