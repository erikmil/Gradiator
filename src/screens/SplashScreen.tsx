import LottieView from "lottie-react-native";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import animation from "../../assets/animation/Gradiator splash V1.0.json";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <LottieView
        source={animation}
        autoPlay
        loop={false}
        resizeMode="cover"
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
