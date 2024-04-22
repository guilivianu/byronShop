import React from "react";
import { StyleSheet, Image, TextInput, ScrollView, View } from "react-native";

import Categorias from "./Categorias/Carousel";

export default function Home() {
  return (
    <ScrollView style={{ height: "100%" }}>
      <Image
        source={require("../../assets/img-fundo.png")}
        style={styles.bgImage}
      />

      <TextInput
        placeholder="Runner Shop"
        autoCapitalize="none"
        style={styles.input}
      />

      <View style={{ marginBottom: 48 }}>
        <Categorias />
        <Categorias />
        <Categorias />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  //  contentContainer: { paddingLeft: 56, paddingRight: 56, paddingTop: 60, gap: 32,},
  bgImage: {
    width: "100%",
    height: 400,
    alignSelf: "center",
    position: "relative",
  },
  input: {
    position: "absolute",
    zIndex: 2,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: "#F2F2F2",
    marginTop: 60,
    marginLeft: 20,
    opacity: 0.4,
    borderRadius: 100,
    height: 28,
    width: "60%",
  },
  productBox: {
    marginTop: 10,
    marginHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
});
