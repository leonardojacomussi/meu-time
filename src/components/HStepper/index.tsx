import Step from "../Step";
import Button from "../Button";
import Stepper from "../Stepper";
import CountrySelector from "../CountrySelector";
import countries from "@/mock/countries"; /**REMOVER */
import LeagueSelector from "../LeagueSelector";
import leagues from "@/mock/leagues"; /**REMOVER */
import SeasonSelector from "../SeasonSelector";
import TeamSelector from "../TeamSelector";
import teams from "@/mock/teams"; /**REMOVER */
import TeamStatistics from "../TeamStatistics";
import statistics from "@/mock/statistics"; /**REMOVER */
import players from "@/mock/players"; /**EXCLUIR */
import { Container, SelectorContainer, Content, Buttons } from "./styles";
import { FC, Fragment, HTMLAttributes, SetStateAction, SyntheticEvent, useState } from "react";
import { DataProps, CountryType, LeagueType, SeasonType, TeamType, LeagueResponse } from "@/interfaces";

const steps = ["País", "Liga", "Temporada", "Clube", "Informações"];

interface HStepperProps extends HTMLAttributes<HTMLDivElement> {
  data: DataProps;
  setData: (value: SetStateAction<DataProps>) => void;
};

const HStepper: FC<HStepperProps> = ({ data, setData, ...props }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [leaguesResponse, setLeagueResponse] = useState<LeagueResponse | null>(null);

  const handleReset = (): void => setActiveStep(0);

  const handleNext = (): void => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = (): void => setActiveStep((prevActiveStep) => prevActiveStep - 1);

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
      {activeStep === steps.length - 1 ? (
        <Fragment>
          <Content>
            <TeamStatistics
              players={players}
              statistics={statistics}
            />
          </Content>
          <Buttons>
            <div style={{ flex: "1 1 auto" }} />
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
    </Container>
  );
}

export default HStepper;