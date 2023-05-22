import { screen, render, waitFor } from "../../utils/tests";
import "jest-styled-components";
import BarChart from ".";
import statistics from "@/mock/statistics"; /**REMOVER */
import theme from "@/styles/theme";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("BarChart", () => {
  window.ResizeObserver = ResizeObserver;

  test("Renders correctly", async () => {
    render(
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
    );
    const canvas = screen.getByTestId("canvas");
    await waitFor(() => {
      expect(canvas).toBeInTheDocument();
    });
  });
});