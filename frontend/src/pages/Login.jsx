import LoginAndRegisterForm from "../components/LoginAndRegisterForm";

function Login() {
  return <LoginAndRegisterForm route="/api/token/" method="login" />;
}

export default Login;
