import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CardProduto({ nome, preco, fotos }) {
  return (
    <View style={styles.productBox}>
      <View style={styles.boxImg}>
        <Image
          source={{
            uri: `http://capacitacao.byronsolutions.com:3000${fotos[0].url}`,
          }}
          style={styles.image}
        />
        <TouchableOpacity>
          <Image
            source={require("../../../../../../assets/botaoAdd.png")}
            style={styles.botaoAdd}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.info}>{nome}</Text>
        <Text style={styles.info}>R${preco}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productBox: {
    marginTop: 10,
    marginLeft: 20,
    gap: 10,
    width: 110,
  },
  boxImg: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 8,
  },
  botaoAdd: {
    backgroundColor: "#000000",
    width: 24,
    height: 24,
    borderRadius: 999999,
    position: "absolute",
    bottom: 6,
    right: 6,
  },
  info: {
    fontSize: 17,
    fontWeight: "500",
  },
});
