import React from "react";
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { SYSTEMS } from "../data/systems";
import { getLetterSpacing } from "../helpers/getLetterSpacing";
import BackgroundLines from "./BackgroundLines";
import { TITLE, TXT } from "./config/textSize";
import FullScreenModal from "./FullScreenModal";

type Props = {
  visible: boolean;
  onSelect: (sys: string) => void;
  onClose: () => void;
  exclude?: string[];
  selected?: string;
};

export default function SystemPicker({
  visible,
  onSelect,
  onClose,
  exclude = [],
  selected,
}: Props) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  const rowPadV = isTablet ? 16 : 8;
  const rowH = isTablet ? 68 : 48;

  const availableSystems = SYSTEMS.filter((s) => !exclude.includes(s.label));
  return (
    <FullScreenModal visible={visible} onClose={onClose}>
      <Pressable style={{ flex: 1 }} onPress={onClose}>
        <BackgroundLines />
        <View style={styles.view}>
          <Text style={styles.title}>Choose grading system</Text>

          {availableSystems.map((s) => {
            const isSelected = s.label === selected;
            return (
              <Pressable
                key={s.key}
                style={[styles.row, { paddingVertical: rowPadV }]}
                onPress={() => onSelect(s.label)}
              >
                <View style={[styles.highlight, { height: rowH }, isSelected && styles.highlightSelected]}>
                  <Text style={[styles.txt, isSelected && styles.txtSelected]}>
                    {s.label}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </Pressable>
    </FullScreenModal>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#1A18BA",
    textAlign: "center",
    marginBottom: 60,
    fontFamily: "CoolveticaBold",
    fontSize: TITLE,
    letterSpacing: getLetterSpacing(TITLE),
  },
  row: { paddingVertical: 8, alignItems: "center", width: "100%" },
  highlight: {
    height: 48,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  highlightSelected: {
    backgroundColor: "#1A18BA",
  },
  txt: {
    fontSize: TXT,
    letterSpacing: getLetterSpacing(TITLE),
    color: "#1A18BA",
    fontFamily: "CoolveticaBold",
    textAlign: "center",
  },
  txtSelected: {
    color: "#fff",
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
