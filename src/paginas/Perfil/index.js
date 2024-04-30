import React from "react";
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
} from "react-native";

export default function Perfil({ navigation }) {
  return (
    <SafeAreaView style={styles.box}>
      <Text style={styles.title}>Tela de perfil</Text>
      <View style={{ gap: 16 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("Cadastro")}
          >
            Cadastro
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#80669d",
    paddingVertical: 16,
    paddingHorizontal: 64,
    borderRadius: 16,
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "500",
    color: "#FFF",
  },
});
