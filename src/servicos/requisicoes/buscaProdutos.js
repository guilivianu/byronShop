import api from "../axios.js";

export async function buscaProdutos() {
  try {
    const resultado = await api.get(`/produtos`);
    return resultado.data;
  } catch (error) {
    console.log(error);
    return [];
  }
  // try {
  //   const resultado = await api.get(`/produtos`);
  //   console.log(resultado.json());
  //   return resultado.data[0];
  // } catch (error) {
  //   console.log(error);
  //   return {};
  // }
}
