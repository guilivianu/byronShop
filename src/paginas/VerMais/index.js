import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

export default function VerMais() {
  return (
    <SafeAreaView style={styles.box}>
      <Text style={styles.title}>Tela de categorias</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
