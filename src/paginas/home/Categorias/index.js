import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Carousel from "./Carousel";

const Categorias = ({ navigation, categoria }) => {
  console.log(categoria);
  return (
    <View>
      <View style={styles.headerBox}>
        <Text style={styles.title}>{categoria}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("VerMais", { categoria })}
          style={styles.button}
        >
          <Text>Ver mais</Text>
        </TouchableOpacity>
      </View>
      <Carousel categoria={categoria} />
    </View>
  );
};

export default Categorias;

const styles = StyleSheet.create({
  //  contentContainer: { paddingLeft: 56, paddingRight: 56, paddingTop: 60, gap: 32,},
  title: {
    fontSize: 28,
    fontWeight: "500",
  },
  button: {
    alignSelf: "flex-end",
  },
  headerBox: {
    padding: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
});
