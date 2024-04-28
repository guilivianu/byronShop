import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import CardProduto from "./CardProduto";
import { useProdutos } from "../../../../../servicos/requisicoes/useProdutos";

import { buscaProdutos } from "../../../../../servicos/requisicoes/buscaProdutos";

const Carousel = (data) => {
  const listaProdutos = useProdutos();

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function pegarProdutos() {
      const resultado = await buscaProdutos();
      setProdutos(resultado);
      console.log(resultado.data[0].fotos[0].url);
    }
    pegarProdutos();
  }, []);

  return (
    <FlatList
      data={produtos.data}
      keyExtractor={({ nome }) => nome}
      renderItem={({ item }) => <CardProduto {...item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    ></FlatList>
  );
};

export default Carousel;
