import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Carousel from "./Carousel";

const Categorias = ({ navigation }) => {
  return (
    <View>
      <View style={styles.headerBox}>
        <Text style={styles.title}>Tênis</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Ver mais</Text>
        </TouchableOpacity>
      </View>
      <Carousel />
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
    marginTop: 50,
    marginHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
});
