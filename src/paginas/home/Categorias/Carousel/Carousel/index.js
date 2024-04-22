import React from "react";
import { FlatList } from "react-native";
import CardProduto from "./CardProduto";
import { useProdutos } from "../../../../../servicos/requisicoes/useProdutos";

const Carousel = (data) => {
  const listaProdutos = useProdutos();

  return (
    <FlatList
      data={listaProdutos}
      keyExtractor={({ nome }) => nome}
      renderItem={({ item }) => <CardProduto {...item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    ></FlatList>
  );
};

export default Carousel;
