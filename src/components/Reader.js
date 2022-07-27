import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

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
    backgroundColor: "#2C2C2C",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
