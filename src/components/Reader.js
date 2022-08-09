import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { fetchImage } from "../hooks/useRequest";
import colors from "../themes/colors";
import { width } from "../themes/metrics";

const window = Dimensions.get("window");

const COMIC_EX = {
  title: "Comic tile here!",
  pageNumber: 123,
  fileHere: "image file comes here!",
};

export default function Reader({ comic = "My comic here!" }) {
  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    console.log(width);
  }, []);

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      {/* <Text> {comic} </Text> */}
      <View style={styles.imgDiv}>
        <Image
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
          source={require("../../assets/previewimg.png")}
        />
      </View>
    </SafeAreaView>
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
