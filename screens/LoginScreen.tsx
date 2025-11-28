import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";

export default function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleLogin = async (value: { email: string; password: string }) => {
    setIsAuthenticating(true);
    try {
      await login(value.email, value.password);
    } catch (error) {
      Alert.alert("Error while logging in!", "Could not enter into account!");
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin={true} onAuthenticate={handleLogin} />;
}
