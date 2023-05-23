import api from "@/lib/api";
import Link from "next/link";
import { NextPage } from "next";
import Cookies from "js-cookie";
import { FiKey } from "react-icons/fi";
import { useSnackbar } from "notistack";
import Input from "../../components/Input";
import { ParsedUrlQuery } from "querystring";
import Button from "../../components/Button";
import { useRouter, NextRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { Container, Form, Background } from "./styles";
import useLoadingContent from "@/hooks/useLoadingContent";

const SignIn: NextPage = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const query: ParsedUrlQuery = router.query;
  const { enqueueSnackbar } = useSnackbar();
  const [apiKey, setApiKey] = useState<string>("");
  const { loadingContent, changeLoadingContent } = useLoadingContent();

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (!apiKey) {
      enqueueSnackbar("Informe a API key", { variant: "error" });
      return;
    };
    changeLoadingContent(true);
    api.defaults.headers["X-RapidAPI-Key"] = apiKey;
    api.get("countries").then((response) => {
      if(response.status >= 200 && response.status < 300) {
        Cookies.set("meu-time-api-key", apiKey);
        router.push("/home");
      };
    }).catch((error) => {
      enqueueSnackbar("API key inválida", { variant: "error" });
    }).finally(() => {
      changeLoadingContent(false);
    });
  };

  const handleInputChange = (e: FormEvent<HTMLInputElement>): void => {
    setApiKey(e.currentTarget.value);
  };

  useEffect(() => {
    if (query.error) {
      enqueueSnackbar("API key inválida", { variant: "error" });
    };
  }, [query])

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
              value={apiKey}
              onChange={handleInputChange}
            />
          </div>
          <Button aria-label="Acessar aplicativa Meu Time">
            Entrar
          </Button>
          <Link href="https://www.api-football.com/" rel="external" target="_blank">Ainda não tem uma API key?</Link>
        </div>
      </Form>
    </Container>
  );
};

export default SignIn;