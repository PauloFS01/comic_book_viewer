import { View, Text, StyleSheet, Modal, Button } from "react-native";
import React from "react";

export default function ReaderModal({ modalVisible, setModalVisible }) {
  return (
    <View style={styles.container}>
      <Modal
        style={{ backgroundColor: "black", height: "100%" }}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ backgroundColor: "black", height: "100%" }}>
          <View>
            <Text>ReaderModal</Text>
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              title="close"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
