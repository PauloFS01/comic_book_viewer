import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Modal, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Reader from "./src/components/Reader";
import ReaderModal from "./src/components/ReaderModal";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <View style={styles.container}></View>
      <ReaderModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <Reader />
      </ReaderModal>
      <Button
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      {/* <Reader /> */}
      <StatusBar barStyle="light-content" backgroundColor={"#FFC700"} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "green",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
