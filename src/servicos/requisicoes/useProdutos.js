import { useState, useEffect } from "react";
import produtos from "../produtos";

const carregaProdutos = () => {
  return produtos;
};

export function useProdutos() {
  const [listaProdutos, setListaProdutos] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutos();
    setListaProdutos(retorno.listaProdutos);
  }, []);

  return listaProdutos;
}
