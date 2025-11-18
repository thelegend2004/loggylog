import axios from "axios";
import Constants from "expo-constants";

const apiKey = Constants?.expoConfig?.extra?.firebaseApiKey;

export const authenticate = async (
  mode: string,
  email: string,
  password: string
) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${apiKey}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
};

export const createUser = async (email: string, password: string) => {
  await authenticate("signUp", email, password);
};

export const login = async (email: string, password: string) => {
  await authenticate("signInWithPassword", email, password);
};