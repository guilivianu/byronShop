import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CardItem({ nome, preco, foto }) {
  return (
    <View style={styles.productBox}>
      <View style={styles.boxImg}>
        <Image source={foto} style={styles.image} />
      </View>
      <View style={styles.boxInfo}>
        <Text style={styles.info}>{nome}</Text>
        <Text style={styles.info}>{preco}</Text>
        <View style={styles.boxAdd}>
          <TouchableOpacity>
            <Text style={styles.textAdd}>-</Text>
          </TouchableOpacity>
          <Text style={styles.textAdd}>1</Text>
          <TouchableOpacity>
            <Text style={styles.textAdd}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productBox: {
    flexDirection: "row",
    marginVertical: 20,
    gap: 20,
  },
  boxImg: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
  },
  image: {
    width: 110,
    height: 110,
  },
  boxInfo: {
    gap: 16,
    justifyContent: "center",
    width: 190,
  },
  info: {
    fontSize: 16,
    fontWeight: "500",
  },
  boxAdd: {
    flexDirection: "row",
    width: 76,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#000",
    opacity: 0.65,
    borderRadius: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  textAdd: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
