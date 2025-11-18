import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/UI/LoadingOverlay";

export default function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleSignup = async (value: { email: string; password: string }) => {
    setIsAuthenticating(true);
    await createUser(value.email, value.password);
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating new account..." />;
  }

  return <AuthContent isLogin={false} onAuthenticate={handleSignup} />;
}
