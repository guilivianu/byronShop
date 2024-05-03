import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { procurarUser } from "../../servicos/requisicoes/buscaProdutos";

export default function Perfil({ navigation }) {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      console.log(
        "--------------------------------------------------------------------------------------------------------------------"
      );
      const token = await AsyncStorage.getItem("TOKEN");
      const response = await procurarUser(token);
      console.log(response.data.data.nome);
      let user = response.data.data;
      setUsuario(user);
    };

    getUser();
  }, []);

  return (
    <SafeAreaView style={styles.box}>
      {/* Img Perfil */}
      <View style={{ gap: 16 }}>
        <Image
          source={require("../../assets/foto-perfil.jpg")}
          style={styles.image}
        />
        <Text style={styles.name}>Olá, {usuario.nome}</Text>
      </View>

      {/* Infos */}
      <View style={{ gap: 33, marginHorizontal: 64 }}>
        {/* Nome */}
        <View style={styles.infoBox}>
          <Text style={styles.title}>Nome</Text>
          <Text style={styles.info}>teste</Text>
        </View>

        {/* Email */}
        <View style={styles.infoBox}>
          <Text style={styles.title}>Email</Text>
          <Text style={styles.info}>camargo_andre@gmail.com</Text>
        </View>

        {/* Senha */}
        <View style={styles.infoBox}>
          <Text style={styles.title}>Senha</Text>
          <Text style={styles.info}>**************</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adicionar produtos</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    height: "100%",
    justifyContent: "center",
    gap: 51,
    backgroundColor: "#FFF",
  },
  image: {
    width: 110,
    height: 110,
    alignSelf: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    color: "#3E3E3E",
    alignSelf: "center",
  },
  infoBox: {
    gap: 23,
    borderBottomWidth: 1,
    borderBottomColor: "#3E3E3E",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#3E3E3E",
  },
  info: {
    fontSize: 15,
    fontWeight: "500",
    color: "#3E3E3E",
    opacity: 0.65,
    marginBottom: 4,
  },
  button: {
    backgroundColor: "#3E3E3E",
    opacity: 0.7,
    paddingVertical: 11,
    width: 152,
    borderRadius: 5,
    alignSelf: "center",
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "500",
    color: "#FFF",
  },
});
