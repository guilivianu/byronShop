import React from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

export default function Login() {
  return (
    <SafeAreaView>
      <View style={styles.box}>
        <Text style={styles.title}>Runner Shop</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="E-mail"
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
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerBox}>
        <Text style={styles.footerText}>Não tem uma conta?</Text>
        <TouchableOpacity>
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
    width: 150,
    height: 30,
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
