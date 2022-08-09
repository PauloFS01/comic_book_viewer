import { View, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import colors from "../themes/colors";
import { width } from "../themes/metrics";

const window = Dimensions.get("window");

const COMIC_EX = {
  title: "Comic tile here!",
  pageNumber: 123,
  fileHere: "image file comes here!",
};

export default function Reader({ comic = "My comic here!" }) {
  React.useEffect(() => {
    console.log(width);
  }, []);

  return (
    <View style={[styles.container]}>
      <View style={styles.imgDiv}>
        <Image
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
          source={require("../../assets/previewimg.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    // alignItems: "center",
    // justifyContent: "center",
  },
  imgDiv: {
    width: window.width,
    height: "100%",
    borderWidth: 1,
    borderColor: "#fff",
  },
});
