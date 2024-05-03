import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, StyleSheet, FlatList, View } from "react-native";
import CardProduto from "../home/Categorias/Carousel/CardProduto";

import { buscaProdutos } from "../../servicos/requisicoes/buscaProdutos";

export default function VerMais({ route, navigation }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function pegarProdutos() {
      const resultado = await buscaProdutos(route.params.categoria);
      setProdutos(resultado);
    }
    pegarProdutos();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF" }}>
      <Text style={styles.title}>{route.params.categoria}</Text>
      <View style={styles.box}>
        <FlatList
          data={produtos.data}
          keyExtractor={({ nome }) => nome}
          renderItem={({ item }) => <CardProduto {...item} />}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 720,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    margin: 16,
    marginTop: 24,
  },
});
