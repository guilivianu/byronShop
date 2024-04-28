import api from "../api";

export async function buscaProdutos(nomeProduto) {
  try {
    const resultado = await api.get(`/produtos`);
    return resultado.data[0];
  } catch (error) {
    console.log(error);
    return {};
  }
}
