import LottieView from "lottie-react-native";
import React from "react";
import { Animated, StatusBar, StyleSheet, View } from "react-native";
import animation from "../../assets/animation/Gradiator splash V1.0.json";

interface SplashScreenProps {
  logoOpacity: Animated.Value;
}

export default function SplashScreen({ logoOpacity }: SplashScreenProps) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.View style={[StyleSheet.absoluteFillObject, { opacity: logoOpacity }]}>
        <LottieView
          source={animation}
          autoPlay
          loop={false}
          resizeMode="cover"
          style={StyleSheet.absoluteFillObject}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A18BA",
  },
});
