import AsyncStorage from "@react-native-async-storage/async-storage";

const storeUserEmail = async (email) => {
  try {
    await AsyncStorage.setItem("userEmail", email);
  } catch (e) {
    // saving error
  }
};

export const userSignedIn = async () => {
  const emailUser = await AsyncStorage.getItem("userEmail");
};
