import React from "react";
import { StyleSheet, Image, TextInput, ScrollView, View } from "react-native";

import Categorias from "./Categorias";

export default function Home({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#FFF", height: "100%" }}>
      <Image
        source={require("../../assets/img-fundo.png")}
        style={styles.bgImage}
      />

      <TextInput
        placeholder="Runner Shop"
        autoCapitalize="none"
        style={styles.input}
      />

      <View style={{ marginBottom: 32, paddingHorizontal: 16, gap: 16 }}>
        <Categorias navigation={navigation} categoria={"Esporte"} />
        <Categorias navigation={navigation} categoria={"Casual"} />
        <Categorias navigation={navigation} categoria={"Corrida"} />
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
    marginBottom: 48,
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
