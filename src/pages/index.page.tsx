import { NextPage } from "next";
import Input from "./components/Input";
import { FiKey } from "react-icons/fi";

const Login: NextPage = (): JSX.Element => {
  return (
    <>
      <h1>Login</h1>
      <Input icon={FiKey} placeholder="API key" />
    </>
  );
};

export default Login;