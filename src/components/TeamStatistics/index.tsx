import Image from "next/image";
import PieChart from "../PieChart";
import BarChart from "../BarChart";
import { FiUserX } from "react-icons/fi";
import { FC, HTMLAttributes } from "react";
import { StatisticsType,PlayerType } from "@/interfaces";
import { useTheme, DefaultTheme } from "styled-components";
import { GiPodiumWinner, GiPodiumSecond, GiPodiumThird } from "react-icons/gi";
import {
  Container, About, Title, Subtitle, Results, TableOfResults,
  ChartContainer, ChartAtHome, ChartAway, Lineups, Players, TableOfPlayers
} from "./styles";

interface TeamStatisticsProps extends HTMLAttributes<HTMLDivElement> {
  statistics: StatisticsType;
  players: Array<PlayerType>;
  [key: string]: any;
};

const TeamStatistics: FC<TeamStatisticsProps> = ({ statistics, players, ...props }): JSX.Element => {
  const theme: DefaultTheme = useTheme();
  return (
    <Container data-testid="container" {...props}>
      <About>
        <div>
          <Image
            data-testid="team-logo"
            src={statistics.team.logo}
            alt={statistics.team.name}
            width={40}
            height={40}
          />
        </div>
        <h2 data-testid="team-name">{statistics.team.name}</h2>
      </About>
      <Results>
        <Title>Resultados</Title>
        <Subtitle>Aproveitamento geral</Subtitle>
        <TableOfResults data-testid="table-results">
          <thead>
            <tr>
              <th>Partidas disputadas</th>
              <th className="txtGreen">Vitórias</th>
              <th className="txtYellow">Empates</th>
              <th className="txtOrange">Derrotas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{statistics.fixtures.played.total}</td>
              <td className="txtGreen">{statistics.fixtures.wins.total}</td>
              <td className="txtYellow">{statistics.fixtures.draws.total}</td>
              <td className="txtOrange">{statistics.fixtures.loses.total}</td>
            </tr>
          </tbody>
        </TableOfResults>

        <ChartContainer>
          <Subtitle>Jogos em casa</Subtitle>
          <ChartAtHome>
            <BarChart
              title="Resultados"
              labels={["Vitórias", "Empates", "Derrotas"]}
              datasets={[
                {
                  label: "Resultados",
                  borderWidth: 0,
                  hoverOffset: 4,
                  data: [
                    statistics.fixtures.wins.home,
                    statistics.fixtures.draws.home,
                    statistics.fixtures.loses.home
                  ],
                  backgroundColor: [
                    theme.colors.green[500],
                    theme.colors.yellow[500],
                    theme.colors.orange[500]
                  ]
                }
              ]}
            />
            <PieChart
              title="Aproveitamento"
              labels={["Pontos ganhos", "Pontos perdidos"]}
              datasets={[
                {
                  label: "Aproveitamento",
                  borderWidth: 0,
                  hoverOffset: 4,
                  data: [
                    100 * Number(((statistics.fixtures.wins.home * 3 + statistics.fixtures.draws.home) / (statistics.fixtures.played.home * 3)).toFixed(2)),
                    100 * Number((1 - ((statistics.fixtures.wins.home * 3 + statistics.fixtures.draws.home) / (statistics.fixtures.played.home * 3))).toFixed(2)),
                  ],
                  backgroundColor: [
                    theme.colors.green[500],
                    theme.colors.orange[500]
                  ]
                }
              ]}
            />
          </ChartAtHome>

          <Subtitle>Jogos fora de casa</Subtitle>
          <ChartAway>
            <BarChart
              title="Resultados"
              labels={["Vitórias", "Empates", "Derrotas"]}
              datasets={[
                {
                  label: "Resultados",
                  borderWidth: 0,
                  hoverOffset: 4,
                  data: [
                    statistics.fixtures.wins.away,
                    statistics.fixtures.draws.away,
                    statistics.fixtures.loses.away
                  ],
                  backgroundColor: [
                    theme.colors.green[500],
                    theme.colors.yellow[500],
                    theme.colors.orange[500]
                  ]
                }
              ]}
            />
            <PieChart
              title="Aproveitamento"
              labels={["Pontos ganhos", "Pontos perdidos"]}
              datasets={[
                {
                  label: "Aproveitamento",
                  borderWidth: 0,
                  hoverOffset: 4,
                  data: [
                    100 * Number(((statistics.fixtures.wins.away * 3 + statistics.fixtures.draws.away) / (statistics.fixtures.played.away * 3)).toFixed(2)),
                    100 * Number((1 - ((statistics.fixtures.wins.away * 3 + statistics.fixtures.draws.away) / (statistics.fixtures.played.away * 3))).toFixed(2)),
                  ],
                  backgroundColor: [
                    theme.colors.green[500],
                    theme.colors.orange[500]
                  ]
                }
              ]}
            />
          </ChartAway>
        </ChartContainer>
      </Results>

      <Lineups>
        <Title>Escalações</Title>
        {
          statistics.lineups
            .slice(0, 3)
            .sort((a, b) => b.played - a.played).map((lineup, index) => (
            <span
              key={index}
              className={`pos-${index+1}`}
            >
              {index === 0 && <GiPodiumWinner />}
              {index === 1 && <GiPodiumSecond />}
              {index === 2 && <GiPodiumThird />}
              <strong>{lineup.formation}</strong> ({lineup.played} jogos)
            </span>
          ))
        }
      </Lineups>
      <Players>
        <Title>Jogadores</Title>
        <TableOfPlayers data-testid="table-players">
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Idade</th>
              <th>Nacionalidade</th>
            </tr>
          </thead>
          <tbody>
            {players.map(({ player }, index) => (
              <tr key={index}>
                <td>
                  <div className="avatar" title={player.name ? player.name : "-"}>
                    {player.photo ?
                      <Image
                        src={player.photo}
                        alt={player.name ? player.name : "-"}
                        width={40}
                        height={40}
                      /> :
                      <FiUserX size={40} color={theme.colors.gray[500]} />
                    }
                  </div>
                </td>
                <td>{player.name ? player.name : "-"}</td>
                <td>{player.age ? player.age : "-"}</td>
                <td>{player.nationality ? player.nationality : "-"}</td>
              </tr>
            ))}
          </tbody>
        </TableOfPlayers>
      </Players>
    </Container>
  );
};

export default TeamStatistics;