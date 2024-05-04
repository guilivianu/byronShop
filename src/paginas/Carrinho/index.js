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
import { procurarCarrinho } from "../../servicos/requisicoes/buscaProdutos";

export default function Carrinho({ navigation }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function pegarProdutos() {
      const token = await AsyncStorage.getItem("TOKEN");
      const resultado = await procurarCarrinho(token);
      // console.log(resultado.data[0].produto.nome);
      setProdutos(resultado.data);
    }
    pegarProdutos();
  }, []);

  let listaProdutos = produtos.map((produto) => produto.produto);

  console.log("Carrinho:", listaProdutos[0]);

  return (
    <SafeAreaView style={{ gap: 35, backgroundColor: "#FFF", height: "100%" }}>
      <View style={styles.view}>
        <Text style={styles.title}>Runner Shop</Text>
        <TouchableOpacity onPress={() => navigation.replace("Tab")}>
          <Text style={styles.subTitle}>Adicionar mais itens</Text>
        </TouchableOpacity>
      </View>
      {listaProdutos.length == 0 ? (
        <View style={styles.statusView}>
          <Text style={styles.status}>Não há produtos no carrinho</Text>
          <TouchableOpacity onPress={() => navigation.replace("Tab")}>
            <Text style={styles.subTitle}>Ver produtos</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ justifyContent: "space-between", height: "83%" }}>
          <FlatList
            data={listaProdutos}
            renderItem={({ item }) => <CardItem {...item} />}
            showsVerticalScrollIndicator={false}
            style={styles.flatList}
          ></FlatList>
          <TouchableOpacity style={styles.boxEnd}>
            <Text style={styles.textEnd}>Finalizar compra</Text>
          </TouchableOpacity>
        </View>
      )}
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
  statusView: {
    padding: 40,
    justifyContent: "center",
    gap: 8,
    height: "65%",
  },
  status: {
    fontSize: 64,
    fontWeight: "500",
    opacity: 0.7,
  },
  boxEnd: {
    flexDirection: "row",
    width: 190,
    paddingVertical: 16,
    paddingHorizontal: 8,
    margin: 24,
    backgroundColor: "#55cf25",
    opacity: 0.65,
    borderRadius: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
  },
  textEnd: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
});
