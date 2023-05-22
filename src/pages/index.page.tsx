import { useState } from "react";
import { NextPage } from "next";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { FiKey } from "react-icons/fi";
import { CountryType } from "@/interfaces";
import TextField from "@mui/material/TextField";
import Autocomplete from "@/components/Autocomplete";
import CountrySelector from "@/components/CountrySelector";

const Login: NextPage = (): JSX.Element => {
  const  [country, setCountry] = useState<CountryType>({
    "code": "",
    "flag": "",
    "name": "Selecione um país"
  });

  return (
    <>
      <h1>Login</h1>
      <Input icon={FiKey} placeholder="API key" />
      <Button>Entrar</Button>
      <Autocomplete options={[{ label: "Opção 1", }, { label: "Opção 2", }, { label: "Opção 3", }]}
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
      />
      <br />
      <CountrySelector value={country} onChangeValue={(e, v) => setCountry(v)}/>
    </>
  );
};

export default Login;