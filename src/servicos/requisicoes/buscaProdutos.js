import api from "../axios.js";

export async function buscaProdutos() {
  try {
    const resultado = await api.get(`/produtos`);
    return resultado.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function criarConta(nome, email, cpf, senha) {
  try {
    const response = await api.post(
      "http://capacitacao.byronsolutions.com:3000/usuarios",
      {
        nome,
        email,
        senha,
        cpf,
      }
    );
    console.log(response.data);
    return "sucesso";
  } catch (error) {
    // console.error(error);
    // console.error(error.response.data);
    return error;
  }
}
