import TeamStatistics from ".";
import "jest-styled-components";
import players from "@/mock/players";
import statistics from "@/mock/statistics";
import { screen, render, fireEvent, within, waitFor } from "../../utils/tests";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("TeamStatistics", () => {
  window.ResizeObserver = ResizeObserver;

  test("Team data renders correctly", () => {
    render(
      <TeamStatistics statistics={statistics} players={players} />
    );
    const logo = screen.getByTestId("team-logo");
    expect(logo).toBeInTheDocument();
    const name = screen.getByTestId("team-name");
    expect(name).toBeInTheDocument();
  });

  test("Results table renders correctly", () => {
    render(
      <TeamStatistics statistics={statistics} players={players} />
    );
    const table = screen.getByTestId("table-results");
    expect(table).toBeInTheDocument();
    const cells = within(table).getAllByRole("cell");
    expect(cells).toHaveLength(4);
    cells.forEach((item) => {
      expect(item).toBeInTheDocument();
    });

    expect(cells[0]).toHaveTextContent(statistics.fixtures.played.total.toString());
    expect(cells[1]).toHaveTextContent(statistics.fixtures.wins.total.toString());
    expect(cells[2]).toHaveTextContent(statistics.fixtures.draws.total.toString());
    expect(cells[3]).toHaveTextContent(statistics.fixtures.loses.total.toString());
  });

  test("Canvas renders correctly", () => {
    render(
      <TeamStatistics statistics={statistics} players={players} />
    );
    const canvas = screen.getAllByTestId("canvas");
    expect(canvas).toHaveLength(4);
    canvas.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  test("Players table renders correctly", () => {
    render(
      <TeamStatistics statistics={statistics} players={players} />
    );
    const table = screen.getByTestId("table-players");
    expect(table).toBeInTheDocument();
    const cells = within(table).getAllByRole("cell");
    expect(cells).toHaveLength(players.length * 4);
    cells.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
});