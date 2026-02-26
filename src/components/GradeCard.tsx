import React from "react";
import { Animated, Pressable, StyleSheet, View, useWindowDimensions } from "react-native";
import { Grade } from "../data/grades";
import { valueFor } from "../hooks/useGradeValue";
import MaskedText from "./MaskedText";

import { getLetterSpacing } from "../helpers/getLetterSpacing";
import { TXTSM } from "./config/textSize";

type Props = {
  grade: Grade;
  topLabel: string;
  bottomLabel: string;
  blueH: Animated.Animated;
  onPickTop: () => void;
  onPickBottom: () => void;
  onPressTopDifficulty: () => void;
  onPressBottomDifficulty: () => void;
  fullH: number;
};

export default function GradeCard({
  grade,
  topLabel,
  bottomLabel,
  blueH,
  onPickTop,
  onPickBottom,
  onPressTopDifficulty,
  onPressBottomDifficulty,
}: Props) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  const gap = isTablet ? 140 : 84;
  const chevronSize = isTablet ? 28 : 18;

  return (
    <View style={[styles.card, { gap }]} pointerEvents="box-none">
      <View style={styles.block} pointerEvents="box-none">
        <Pressable onPress={onPickTop}>
          <View style={styles.row}>
            <MaskedText
              text={topLabel}
              blueH={blueH}
              style={{
                fontSize: TXTSM,
                letterSpacing: getLetterSpacing(TXTSM),
                fontFamily: "Coolvetica",
              }}
            />

            <MaskedText
              icon={{ name: "chevron-down-outline", size: chevronSize }}
              blueH={blueH}
            />
          </View>
        </Pressable>

        <Pressable onPress={onPressTopDifficulty}>
          <MaskedText
            text={valueFor(topLabel, grade).toString()}
            blueH={blueH}
          />
        </Pressable>
      </View>

      <View style={styles.block} pointerEvents="box-none">
        <Pressable onPress={onPickBottom}>
          <View style={styles.row}>
            <MaskedText
              text={bottomLabel}
              blueH={blueH}
              style={{
                fontSize: TXTSM,
                letterSpacing: getLetterSpacing(TXTSM),
                fontFamily: "Coolvetica",
              }}
            />

            <MaskedText
              icon={{ name: "chevron-down-outline", size: chevronSize }}
              blueH={blueH}
            />
          </View>
        </Pressable>

        <Pressable onPress={onPressBottomDifficulty}>
          <MaskedText
            text={valueFor(bottomLabel, grade).toString()}
            blueH={blueH}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 84,
  },
  block: { alignItems: "flex-end" },

  label: {
    fontSize: TXTSM,
    letterSpacing: getLetterSpacing(TXTSM),
    color: "#1A18BA",
    fontFamily: "Coolvetica",
  },

  row: {
    flexDirection: "row",
    gap: 4,
  },
});
