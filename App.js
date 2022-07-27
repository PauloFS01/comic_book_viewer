import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Reader from "./src/components/Reader";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  // const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <Reader />
      <StatusBar barStyle="light-content" backgroundColor={"#FFC700"} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
