import Step from "../Step";
import api from "@/lib/api";
import Button from "../Button";
import Stepper from "../Stepper";
import defaultData from "@/mock/data";
import { useSnackbar } from "notistack";
import countries from "@/mock/countries";
import TeamSelector from "../TeamSelector";
import LoadingContent from "../LoadingContent";
import LeagueSelector from "../LeagueSelector";
import SeasonSelector from "../SeasonSelector";
import TeamStatistics from "../TeamStatistics";
import CountrySelector from "../CountrySelector";
import { Container, SelectorContainer, Content, Buttons } from "./styles";
import { FC, Fragment, HTMLAttributes, SetStateAction, SyntheticEvent, useEffect, useState } from "react";
import { DataType, CountryType, LeagueType, SeasonType, TeamType, LeagueResponse, StatisticsType, PlayerType } from "@/interfaces";

const steps = ["País", "Liga", "Temporada", "Clube", "Informações"];

interface HStepperProps extends HTMLAttributes<HTMLDivElement> {
  data: DataType;
  apiKey: string;
  setData: (value: SetStateAction<DataType>) => void;
};

const HStepper: FC<HStepperProps> = ({ data, setData, apiKey, ...props }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [leagues, setLeagues] = useState<Array<LeagueResponse>>([]);
  const [teams, setTeams] = useState<Array<TeamType>>([]);
  const [players, setPlayers] = useState<Array<PlayerType>>([]);
  const [statistics, setStatistics] = useState<StatisticsType | null>(null);
  const [leaguesResponse, setLeagueResponse] = useState<LeagueResponse | null>(null);

  const handleReset = (): void => setActiveStep(0);

  const handleBack = (): void => {
    if (activeStep === 0) {
      return;
    } else if (activeStep === 1) {
      setData({ ...data, league: { ...defaultData.league } });
    } else if (activeStep === 2) {
      setData({ ...data, season: { ...defaultData.season } });
    } else if (activeStep === 3) {
      setData({ ...data, team: { ...defaultData.team } });
    };
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = async (): Promise<void> => {
    if (activeStep === steps.length - 1) return;
    setLoading(true);
    if (activeStep === 0) {
      const success = await fetchLeague();
      if (!success) return;
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === 2) {
      const success = await fetchTeam();
      if (!success) return;
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === 3) {
      const success = await fetchTeamStatistics();
      if (!success) return;
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    setLoading(false);
  };

  const fetchLeague = async (): Promise<boolean> => {
    try {
      const response = await api.get("leagues", {
        headers: {
          "x-rapidapi-key": apiKey,
        },
        params: {
          code: data.country.code.toLowerCase(),
        },
      });
      setLeagues(response.data.response);
      return true;
    } catch (error) {
      enqueueSnackbar("Erro ao buscar liga", { variant: "error" });
      return false;
    };
  };

  const fetchTeam = async (): Promise<boolean> => {
    try {
      const response = await api.get("teams", {
        headers: {
          "X-RapidAPI-Key": apiKey,
        },
        params: {
          league: data.league.id,
          season: data.season.year,
        },
      });
      setTeams(response.data.response);
      return true;
    } catch (error) {
      enqueueSnackbar("Erro ao buscar clube", { variant: "error" });
      return false;
    };
  };

  const fetchTeamStatistics = async (): Promise<boolean> => {
    try {
      const responseStatistics = await api.get("teams/statistics", {
        headers: {
          "X-RapidAPI-Key": apiKey,
        },
        params: {
          league: data.league.id,
          season: data.season.year,
          team: data.team.team.id,
        },
      });
      const responsePlayers = await api.get("players", {
        headers: {
          "X-RapidAPI-Key": apiKey,
        },
        params: {
          team: data.team.team.id,
          season: data.season.year,
        },
      });
      setStatistics(responseStatistics.data.response);
      setPlayers(responsePlayers.data.response);
      return true;
    } catch (error) {
      enqueueSnackbar("Erro ao buscar estatísticas", { variant: "error" });
      return false;
    };
  };

  const isDisabled = (): boolean => {
    if (activeStep === 0) return data.country.flag === "" || data.country.flag === undefined;
    if (activeStep === 1) return data.league.logo === "" || data.league.logo === undefined;
    if (activeStep === 2) return typeof (data.season.year) !== "number" || data.league.logo === undefined;
    if (activeStep === 4) return data.team.team.name !== "Selecione um clube" || !data.team.team.name;
    return false;
  };

  const handleCountryChange = (event: SyntheticEvent<Element, Event>, value: CountryType): void => {
    event.preventDefault();
    if (value === null) return;
    const findCountry = countries.find((country) => country.name === value.name);
    if (findCountry === undefined) return;
    setData({ ...data, country: value });
  };

  const handleLeagueChange = (event: SyntheticEvent<Element, Event>, value: LeagueType): void => {
    event.preventDefault();
    if (value === null) return;
    const findLeague = leagues.find(({ league }) => league.id === value.id);
    if (findLeague === undefined) return;
    setLeagueResponse(findLeague);
    setData({ ...data, league: value });
  };

  const handleSeasonChange = (event: SyntheticEvent<Element, Event>, value: SeasonType): void => {
    event.preventDefault();
    if (value === null) return;
    const findSeason = leaguesResponse?.seasons.find((season: SeasonType) => season.year === value.year);
    if (findSeason === undefined) return;
    setData({ ...data, season: value });
  };

  const handleTeamChange = (event: SyntheticEvent<Element, Event>, value: TeamType): void => {
    event.preventDefault();
    if (value === null) return;
    const findTeam = teams.find(({ team }) => team.id === value.team.id);
    if (findTeam === undefined) return;
    setData({ ...data, team: value });
  };

  return (
    <Container {...props}>
      <Stepper>
        {steps.map((label, index) => {
          return (
            <Step
              key={label}
              label={label}
              step={index + 1}
              active={activeStep === index}
              completed={activeStep > index}
            />
          );
        })}
      </Stepper>
      {statistics && activeStep === steps.length - 1 ? (
        <Fragment>
          <Content>
            <TeamStatistics
              players={players}
              statistics={statistics}
            />
          </Content>
          <Buttons>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Anterior
            </Button>
            <Button onClick={handleReset}>Reiniciar</Button>
          </Buttons>
        </Fragment>
      ) : (
        <Fragment>
          {
            activeStep === 0 &&
            <SelectorContainer>
              <label htmlFor="CountrySelector">Selecione um pais: </label>
              <CountrySelector
                id="CountrySelector"
                value={data.country}
                onChangeValue={handleCountryChange}
              />
            </SelectorContainer>
          }
          {
            activeStep === 1 &&
            <SelectorContainer>
              <label htmlFor="LegueSelector">Selecione uma liga: </label>
              <LeagueSelector
                id="LegueSelector"
                value={data.league}
                onChangeValue={handleLeagueChange}
                leagues={leagues}
              />
            </SelectorContainer>
          }
          {
            leaguesResponse && activeStep === 2 &&
            <SelectorContainer>
              <label htmlFor="SeasonSelector">Selecione uma temporada: </label>
              <SeasonSelector
                id="SeasonSelector"
                value={data.season}
                onChangeValue={handleSeasonChange}
                league={leaguesResponse}
              />
            </SelectorContainer>
          }
          {
            activeStep === 3 &&
            <SelectorContainer>
              <label htmlFor="TeamSelector">Selecione um clube: </label>
              <TeamSelector
                id="TeamSelector"
                value={data.team}
                onChangeValue={handleTeamChange}
                teams={teams}
              />
            </SelectorContainer>
          }
          <Buttons>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Anterior
            </Button>
            <Button onClick={handleNext} disabled={isDisabled()}>
              Próximo
            </Button>
          </Buttons>
        </Fragment>
      )}
      <LoadingContent open={loading} />
    </Container>
  );
}

export default HStepper;