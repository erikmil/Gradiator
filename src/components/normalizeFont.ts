import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;

export const scale = (size: number) =>
  (SCREEN_WIDTH / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (SCREEN_HEIGHT / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const scaleFactor = SCREEN_WIDTH >= 768 ? 0.5 : 0.25;
export const normalize = (size: number) => moderateScale(size, scaleFactor);
