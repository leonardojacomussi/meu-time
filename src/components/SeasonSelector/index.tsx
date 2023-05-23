import leagues from "../../mock/leagues"; /**EXCLUIR */
import { useMemo } from "react";
import Box from "@mui/material/Box";
import { Container } from "./styles";
import Autocomplete from "../Autocomplete";
import { SeasonType, LeagueResponse } from "../../interfaces";
import TextField from "@mui/material/TextField";
import { FC, SyntheticEvent, HTMLAttributes } from "react";

interface SeasonSelectorProps extends HTMLAttributes<HTMLDivElement> {
  value: SeasonType,
  onChangeValue: (event: SyntheticEvent<Element, Event>, value: SeasonType) => void
  league: LeagueResponse,
};

const SeasonSelector: FC<SeasonSelectorProps> = ({ value, onChangeValue, league, id, ...props }) => {
  const options: Array<SeasonType> = useMemo(() => {
    const aux: Array<SeasonType> = league.seasons.map((season) => {
      return {
        year: season.year,
        start: season.start,
        end: season.end,
      };
    });
    aux.unshift({ year: "Selecione uma temporada", start: "", end: "" });
    return aux;
  }, [leagues])
  return (
    <Container data-testid="container" {...props}>
      <Autocomplete
        id={id ? id : "season-select"}
        sx={{ width: 300 }}
        options={options}
        getOptionDisabled={(option: SeasonType) => option.year === "Selecione uma temporada"}
        disableClearable
        autoHighlight
        value={value}
        onChange={onChangeValue}
        getOptionLabel={(option) =>  `${option.year}`}
        noOptionsText="Nenhuma temporada encontrada"
        isOptionEqualToValue={(option: SeasonType, value: SeasonType) => option.year === value.year}
        renderOption={(props, option: SeasonType) => (
          <Box component="li" {...props}>
            {option.year}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
              placeholder: "Selecione uma temporada",
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </Container>
  );
};

SeasonSelector.defaultProps = {
  league: leagues[0],
};

export default SeasonSelector;