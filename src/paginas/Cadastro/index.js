import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
} from "react-native";
import { criarConta } from "../../servicos/requisicoes/buscaProdutos";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  async function criar() {
    const resultado = await criarConta(nome, email, cpf, senha);

    if (resultado === "sucesso") {
      Alert.alert("Conta criada!");
    } else {
      Alert.alert("Erro", "Houve um problema ao cadastrar o usuário.");
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.box}>
        <Text style={styles.title}>Cadastro</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Nome"
            autoCapitalize="none"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            placeholder="E-mail"
            autoCapitalize="none"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="CPF"
            autoCapitalize="none"
            style={styles.input}
            value={cpf}
            onChangeText={setCpf}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Senha"
            autoCapitalize="none"
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={criar}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 51,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    alignSelf: "center",
  },
  inputBox: {
    gap: 15,
  },
  input: {
    backgroundColor: "#F1F1F1",
    borderRadius: 5,
    width: 280,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "500",
    height: 40,
  },
  button: {
    backgroundColor: "#3E3E3E",
    borderRadius: 5,
    width: 152,
    height: 34,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    alignSelf: "center",
    color: "white",
  },
});
