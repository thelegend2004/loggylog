import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { login } from "../util/auth";

export default function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleLogin = async (value: { email: string; password: string }) => {
    setIsAuthenticating(true);
    await login(value.email, value.password);
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin={true} onAuthenticate={handleLogin} />;
}
