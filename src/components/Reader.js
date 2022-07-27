import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import colors from "../themes/colors";

const COMIC_EX = {
  title: "Comic tile here!",
  pageNumber: 123,
  fileHere: "image file comes here!",
};

export default function Reader({ comic = "My comic here!" }) {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <Text> {comic} </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
