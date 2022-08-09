import { Dimensions, Platform } from "react-native";

const window = Dimensions.get("window");

const isIOS = Platform.OS === "ios";

const pixelRatio = window.width / 360;

export default {
  isIOS,
  statusBarHeight: isIOS ? 20 : 0,
  width: window.width,
  height: window.height,
  scale: window.scale,
  pixelRatio,
};
