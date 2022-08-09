import { View, Text, StyleSheet, Modal, Button } from "react-native";
import React from "react";

export default function ReaderModal({
  modalVisible,
  setModalVisible,
  children,
}) {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        // transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.content}>
          {/* <Button
            style={styles.exitButton}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            title="close"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          /> */}
          {children}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  content: {
    position: "absolute",
    height: "100%",
    backgroundColor: "black",
  },
  exitButton: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});
