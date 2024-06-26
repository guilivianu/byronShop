import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { entrarConta } from "../../servicos/requisicoes/buscaProdutos";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // console.log(email);

  const storeUserEmail = async (token) => {
    try {
      await AsyncStorage.setItem("TOKEN", token);
    } catch (e) {
      // saving error
    }
  };

  async function logar() {
    const resultado = await entrarConta(email, senha);

    if (resultado.msg === "Login realizado com sucesso") {
      Alert.alert(resultado.msg);
      storeUserEmail(resultado.token);
      navigation.navigate("Tab");
    } else {
      Alert.alert("Erro", resultado);
    }
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", height: "100%" }}>
      <View style={styles.box}>
        <Text style={styles.title}>Runner Shop</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="E-mail"
            autoCapitalize="none"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
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
        <TouchableOpacity style={styles.button} onPress={logar}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerBox}>
        <Text style={styles.footerText}>Não tem uma conta?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cadastro", { navigation })}
        >
          <Text style={styles.footerButton}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    height: "90%",
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
  footerBox: {
    borderTopWidth: 1.5,
    borderTopColor: "#3E3E3E",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    height: "10%",
  },
  footerText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#3E3E3E",
  },
  footerButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
});
