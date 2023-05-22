import Image from "next/image";
import countries from "../../mock/countries";
import Box from "@mui/material/Box";
import { FiGlobe } from "react-icons/fi";
import { Container, Flag } from "./styles";
import Autocomplete from "../Autocomplete";
import { CountryType } from "../../interfaces";
import TextField from "@mui/material/TextField";
import { FC, SyntheticEvent, HTMLAttributes } from "react";

interface CountrySelectorProps extends HTMLAttributes<HTMLDivElement> {
  value: CountryType,
  onChangeValue: (event: SyntheticEvent<Element, Event>, value: CountryType) => void
};

const CountrySelector: FC<CountrySelectorProps> = ({ value, onChangeValue, ...props }) => {
  return (
    <Container data-testid="container" {...props}>
      <Flag>
        {
          value?.flag ?
            <Image
              src={value.flag}
              alt={value.name}
              width={20}
              height={20}
            />
            :
            <FiGlobe />
        }
      </Flag>
      <Autocomplete
        id="country-select"
        sx={{ width: 300 }}
        options={countries}
        getOptionDisabled={(option) => option.name === "Selecione um país"}
        disableClearable
        autoHighlight
        value={value}
        isOptionEqualToValue={(option: CountryType, value: CountryType) => option.name === value.name}
        onChange={onChangeValue}
        getOptionLabel={(option) => option.name}
        noOptionsText="Nenhum país encontrado"
        renderOption={(props, option) => (
          <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
            {option.flag && <Image
              loading="lazy"
              width={20}
              height={20}
              src={option.flag}
              alt={option.name}
            />}
            {option.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
              placeholder: "Selecione um país",
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </Container>
  );
};

export default CountrySelector;