import LoginAndRegisterForm from "../components/LoginAndRegisterForm";

function Register() {
  return <LoginAndRegisterForm route="/api/user/register/" method="register" />;
}

export default Register;
