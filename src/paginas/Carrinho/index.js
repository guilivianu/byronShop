import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import CardItem from "./CardItem";
import { useProdutos } from "../../servicos/requisicoes/useProdutos";

export default function Carrinho() {
  const listaProdutos = useProdutos();
  return (
    <SafeAreaView style={{ gap: 35 }}>
      <View style={styles.view}>
        <Text style={styles.title}>Runner Shop</Text>
        <TouchableOpacity>
          <Text style={styles.subTitle}>Adicionar mais itens</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={listaProdutos}
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
  },
});
