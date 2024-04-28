import React from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

export default function Cadastro() {
  return (
    <SafeAreaView>
      <View style={styles.box}>
        <Text style={styles.title}>Cadastro</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Nome"
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            placeholder="E-mail"
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            placeholder="CPF"
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            placeholder="Senha"
            autoCapitalize="none"
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.button}>
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
