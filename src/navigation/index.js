import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

// Import páginas
import Home from "../paginas/home";
import Login from "../paginas/Login";
import Cadastro from "../paginas/Cadastro";
import Carrinho from "../paginas/Carrinho";
import Perfil from "../paginas/Perfil";
import VerMais from "../paginas/VerMais";
import Categorias from "../paginas/home/Categorias";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/icon-inicio.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sacola"
        component={Carrinho}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/icon-sacola.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/icon-perfil.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={{ headerTitle: "", headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="VerMais" component={VerMais} />
        <Stack.Screen name="Categorias" component={Categorias} />
        <Stack.Screen name="Tab" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
