import Link from "next/link";
import { NextPage } from "next";
import { FormEvent } from "react";
import { FiKey } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useRouter, NextRouter } from "next/router";
import { Container, Form, Background } from "./styles";

const SignIn: NextPage = (): JSX.Element => {
  const router: NextRouter = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/home");
  };

  return (
    <Container>
      <Background />
      <Form onSubmit={handleSubmit}>
        <h1>Meu time</h1>
        <div className="formContainer">
          <div className="inputContainer">
            <label htmlFor="apiKey">Informe a API key:</label>
            <Input
              type="text"
              name="apiKey"
              id="apiKey"
              placeholder="API key"
              icon={FiKey}
            />
          </div>
          <Button aria-label="Acessar aplicativa Meu Time">
            Entrar
          </Button>
          <Link href="/register">Ainda não tem uma API key?</Link>
        </div>
      </Form>
    </Container>
  );
};

export default SignIn;