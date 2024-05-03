import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CardItem from "./CardItem";
import { useProdutos } from "../../servicos/requisicoes/useProdutos";
import { procurarCarrinho } from "../../servicos/requisicoes/buscaProdutos";

export default function Carrinho() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function pegarProdutos() {
      console.log("-----------------------------------------");
      const token = await AsyncStorage.getItem("TOKEN");
      console.log("teste");
      const resultado = await procurarCarrinho(token);
      // console.log(resultado.data[0].produto.nome);
      setProdutos(resultado.data);
    }
    pegarProdutos();
  }, []);

  console.log(produtos[0].produto);

  const listaProdutos = useProdutos();
  return (
    <SafeAreaView style={{ gap: 35, backgroundColor: "#FFF", height: "100%" }}>
      <View style={styles.view}>
        <Text style={styles.title}>Runner Shop</Text>
        <TouchableOpacity>
          <Text style={styles.subTitle}>Adicionar mais itens</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={produtos}
        keyExtractor={({ nome }) => nome}
        renderItem={({ item }) => <CardItem {...item} />}
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 40,
    paddingBottom: 0,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "500",
    opacity: 0.7,
  },
  flatList: {
    alignSelf: "center",
    backgroundColor: "#FFF",
  },
});
