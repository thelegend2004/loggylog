import AuthContent from "../components/Auth/AuthContent";

export default function SignupScreen() {
  return (
    <AuthContent
      isLogin={false}
      onAuthenticate={({}) => {
        console.log("hello");
      }}
    />
  );
}
