import { screen, render, fireEvent, within, waitFor } from "../../utils/tests";
import "jest-styled-components";
import LeagueSelector from ".";
import leagues from "./leagues";
import { LeagueType } from "@/interfaces";

describe("LeagueSelector", () => {
  test("Renders correctly", () => {
    const onChange = jest.fn();
    const league: LeagueType = leagues[1].league;

    render(
      <LeagueSelector
        value={league}
        leagues={leagues}
        onChangeValue={onChange}
      />
    );
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
  });

  test("onChange", async () => {
    const onChange = jest.fn();
    const league: LeagueType = leagues[1].league;

    render(
      <LeagueSelector
        value={league}
        leagues={leagues}
        onChangeValue={onChange}
      />
    );
    const autocomplete = screen.getByTestId("autocomplete");
    const input = within(autocomplete).getByRole("combobox");
    autocomplete.focus();
    fireEvent.change(input, { target: { value: "premier" } });
    expect(screen.getByText("Premier League")).toBeInTheDocument();
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" })
    fireEvent.keyDown(autocomplete, { key: "Enter" })
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});