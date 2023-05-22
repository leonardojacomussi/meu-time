import { screen, render, fireEvent, within, waitFor } from "../../utils/tests";
import "jest-styled-components";
import TeamSelector from ".";
import teams from "../../mock/teams";
import { TeamType } from "@/interfaces";

describe("TeamSelector", () => {
  test("Renders correctly", () => {
    const onChange = jest.fn();
    const team: TeamType = teams[1];

    render(
      <TeamSelector
        value={team}
        teams={teams}
        onChangeValue={onChange}
      />
    );
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
  });

  test("onChange", async () => {
    const onChange = jest.fn();
    const team: TeamType = teams[1];

    render(
      <TeamSelector
        value={team}
        teams={teams}
        onChangeValue={onChange}
      />
    );
    const autocomplete = screen.getByTestId("autocomplete");
    const input = within(autocomplete).getByRole("combobox");
    autocomplete.focus();
    fireEvent.change(input, { target: { value: "manchester" } });
    expect(screen.getByText("Manchester United")).toBeInTheDocument();
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" })
    fireEvent.keyDown(autocomplete, { key: "Enter" })
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});