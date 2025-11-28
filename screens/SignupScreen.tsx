import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { Alert } from "react-native";

export default function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleSignup = async (value: { email: string; password: string }) => {
    setIsAuthenticating(true);
    try {
      await createUser(value.email, value.password);
    } catch (error) {
      Alert.alert("Error while creating new user!", "Could not sign you up!");
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating new account..." />;
  }

  return <AuthContent isLogin={false} onAuthenticate={handleSignup} />;
}
