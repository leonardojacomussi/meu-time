import { NextPage } from "next";
import Input from "./components/Input";
import Button from "./components/Button";
import { FiKey } from "react-icons/fi";

const Login: NextPage = (): JSX.Element => {
  return (
    <>
      <h1>Login</h1>
      <Input icon={FiKey} placeholder="API key" />
      <Button>Entrar</Button>
    </>
  );
};

export default Login;