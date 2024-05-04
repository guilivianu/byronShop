import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { removerDoCarrinho } from "../../../servicos/requisicoes/buscaProdutos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function CardItem({ nome, preco, fotos, id }) {
  const navigation = useNavigation();

  const handleRefresh = () => {
    // Navega para a mesma tela, forçando uma atualização
    navigation.replace("Tab");
  };

  async function remover() {
    const token = await AsyncStorage.getItem("TOKEN");
    console.log("Token: ", token);

    const resultado = await removerDoCarrinho(token, id);
    console.log("teste");
    if (resultado === "sucesso") {
      Alert.alert("Produto removido!");
      handleRefresh();
    } else {
      Alert.alert("Erro", resultado);
    }
  }

  // console.log(fotos[0].url);
  return (
    <View style={styles.productBox}>
      <View style={styles.boxImg}>
        <Image
          source={{
            uri: `http://capacitacao.byronsolutions.com:3000${fotos[0].url}`,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.boxInfo}>
        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.preco}>R$ {preco}</Text>
        <View style={styles.boxAdd}>
          <TouchableOpacity onPress={remover}>
            <Text style={styles.textAdd}>Remover item</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Text style={styles.textAdd}>-</Text>
          </TouchableOpacity>
          <Text style={styles.textAdd}>1</Text>
          <TouchableOpacity>
            <Text style={styles.textAdd}>+</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productBox: {
    flexDirection: "row",
    marginVertical: 20,
    gap: 20,
  },
  boxImg: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 4,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 8,
  },
  boxInfo: {
    gap: 16,
    justifyContent: "center",
    width: 190,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
  },
  preco: {
    fontSize: 16,
    fontWeight: "500",
  },
  boxAdd: {
    flexDirection: "row",
    width: 130,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#db2121",
    opacity: 0.65,
    borderRadius: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  textAdd: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
