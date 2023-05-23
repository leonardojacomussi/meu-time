import Image from "next/image";
import leagues from "../../mock/leagues"; /**EXCLUIR */
import { useMemo } from "react";
import Box from "@mui/material/Box";
import { FiGlobe } from "react-icons/fi";
import { Container, Logo } from "./styles";
import Autocomplete from "../Autocomplete";
import { LeagueType, LeagueResponse } from "../../interfaces";
import TextField from "@mui/material/TextField";
import { FC, SyntheticEvent, HTMLAttributes } from "react";

interface LeagueSelectorProps extends HTMLAttributes<HTMLDivElement> {
  value: LeagueType,
  onChangeValue: (event: SyntheticEvent<Element, Event>, value: LeagueType) => void
  leagues: LeagueResponse[],
};

const LeagueSelector: FC<LeagueSelectorProps> = ({ value, onChangeValue, leagues, id, ...props }) => {
  const options: Array<LeagueType> = useMemo(() => {
    const aux: Array<LeagueType> = leagues.map(({ league }) => {
      return {
        id: league.id,
        name: league.name,
        logo: league.logo,
        type: league.type,
      };
    });
    aux.unshift({ id: 0, name: "Selecione uma liga", logo: "", type: "" });
    return aux;
  }, [leagues])
  return (
    <Container data-testid="container" {...props}>
      <Logo>
        {
          value?.logo ?
            <Image
              src={value.logo}
              alt={value.name}
              width={20}
              height={20}
            />
            :
            <FiGlobe />
        }
      </Logo>
      <Autocomplete
        id={id ? id : "league-select"}
        sx={{ width: 300 }}
        options={options}
        getOptionDisabled={(option) => option.name === "Selecione uma liga"}
        disableClearable
        autoHighlight
        value={value}
        onChange={onChangeValue}
        getOptionLabel={(option) => option.name}
        noOptionsText="Nenhuma liga encontrada"
        isOptionEqualToValue={(option: LeagueType, value: LeagueType) => option.id === value.id}
        renderOption={(props, option) => (
          <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
            {option.logo && <Image
              loading="lazy"
              width={20}
              height={20}
              src={option.logo}
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
              placeholder: "Selecione uma liga",
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </Container>
  );
};

LeagueSelector.defaultProps = {
  leagues: leagues,
};

export default LeagueSelector;