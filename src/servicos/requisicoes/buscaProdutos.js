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

export async function buscaProdutosCategoria(categoria) {
  try {
    const resultado = await api.get(`/produtos?categoria=${categoria}`);
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
    // console.log(response.data);
    return "sucesso";
  } catch (error) {
    // console.error(error);
    // console.error(error.response.data.msg)
    return error.response.data.msg;
  }
}

export async function entrarConta(email, senha) {
  try {
    const response = await api.post(
      "http://capacitacao.byronsolutions.com:3000/usuarios/login",
      {
        email,
        senha,
      }
    );
    console.log(response.data.token);
    return response.data;
  } catch (error) {
    // console.error(error);
    // console.error(error.response.data.msg)
    return error.response.data.msg;
  }
}

export async function adicionarAoCarrinho(token, produtoId) {
  try {
    const response = await api.post(
      "http://capacitacao.byronsolutions.com:3000/carrinho/adicionar/" +
        produtoId,
      {}, // Corpo da requisição vazio, pois o ID do produto é passado na URL
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data);
    // console.log(response.status);
  } catch (error) {
    // console.log(error.response.data.msg);
    // console.log(error.response.status);
  }
}

export async function procurarUser(token) {
  console.log(token);
  try {
    const response = await api.get(
      "http://capacitacao.byronsolutions.com:3000/usuarios/account/",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    console.log(response.status);
    return response;
  } catch (error) {
    console.log(error.response.data.msg);
    console.log(error.response.status);
  }
}

export async function procurarCarrinho(token) {
  console.log(token);
  try {
    const response = await api.get(
      "http://capacitacao.byronsolutions.com:3000/carrinho",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data);
    // console.log(response.status);
    return response.data;
  } catch (error) {
    console.log(error.response.data.msg);
    console.log(error.response.status);
  }
}
