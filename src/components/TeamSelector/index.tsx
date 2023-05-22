import Image from "next/image";
import { useMemo } from "react";
import Box from "@mui/material/Box";
import { FiGlobe } from "react-icons/fi";
import { Container, Logo } from "./styles";
import Autocomplete from "../Autocomplete";
import { TeamType } from "../../interfaces";
import TextField from "@mui/material/TextField";
import { FC, SyntheticEvent, HTMLAttributes } from "react";

interface TeamSelectorProps extends HTMLAttributes<HTMLDivElement> {
  value: TeamType,
  onChangeValue: (event: SyntheticEvent<Element, Event>, value: TeamType) => void
  teams: TeamType[],
};

const TeamSelector: FC<TeamSelectorProps> = ({ value, onChangeValue, teams, ...props }) => {
  const options = useMemo(() => {
    const aux: TeamType[] = [...teams];
    aux.unshift({
      "team": {
        "id": 0,
        "name": "Selecione um clube",
        "code": "",
        "country": "",
        "founded": 0,
        "national": false,
        "logo": ""
      },
      "venue": {
        "id": 0,
        "name": "",
        "address": "",
        "city": "",
        "capacity": 0,
        "surface": "",
        "image": ""
      }
    });
    return aux;
  }, [teams]);

  return (
    <Container data-testid="container" {...props}>
      <Logo>
        {
          value?.team.logo ?
            <Image
              src={value.team.logo}
              alt={value.team.name}
              width={20}
              height={20}
            />
            :
            <FiGlobe />
        }
      </Logo>
      <Autocomplete
        id="team-select"
        sx={{ width: 300 }}
        options={options}
        getOptionDisabled={(option: TeamType) => option.team.name === "Selecione um clube"}
        disableClearable
        autoHighlight
        value={value}
        onChange={onChangeValue}
        getOptionLabel={(option: TeamType) => option.team.name}
        noOptionsText="Nenhuma liga encontrada"
        isOptionEqualToValue={(option: TeamType, value: TeamType) => option.team.id === value.team.id}
        renderOption={(props, option: TeamType) => (
          <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
            {option.team.logo && <Image
              loading="lazy"
              width={20}
              height={20}
              src={option.team.logo}
              alt={option.team.name}
            />}
            {option.team.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
              placeholder: "Selecione uma liga",
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </Container>
  );
};

export default TeamSelector;