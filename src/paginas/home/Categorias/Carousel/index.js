import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import CardProduto from "./CardProduto";

import { buscaProdutosCategoria } from "../../../../servicos/requisicoes/buscaProdutos";

const Carousel = (categoria) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function pegarProdutos() {
      const resultado = await buscaProdutosCategoria(categoria.categoria);
      setProdutos(resultado);
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
      style={{ overflow: "visible" }}
    ></FlatList>
  );
};

export default Carousel;
