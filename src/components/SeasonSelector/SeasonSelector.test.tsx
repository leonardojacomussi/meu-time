import { screen, render, fireEvent, within, waitFor } from "../../utils/tests";
import "jest-styled-components";
import SeasonSelector from ".";
import leagues from "../../mock/leagues";
import { SeasonType } from "@/interfaces";

describe("SeasonSelector", () => {
  test("Renders correctly", () => {
    const onChange = jest.fn();
    const season: SeasonType = leagues[1].seasons[0];

    render(
      <SeasonSelector
        value={season}
        league={leagues[1]}
        onChangeValue={onChange}
      />
    );
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
  });

  test("onChange", async () => {
    const onChange = jest.fn();
    const season: SeasonType = leagues[1].seasons[0];

    render(
      <SeasonSelector
        value={season}
        league={leagues[1]}
        onChangeValue={onChange}
      />
    );
    const autocomplete = screen.getByTestId("autocomplete");
    const input = within(autocomplete).getByRole("combobox");
    autocomplete.focus();
    fireEvent.change(input, { target: { value: "201" } });
    expect(screen.getByText("2011")).toBeInTheDocument();
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" })
    fireEvent.keyDown(autocomplete, { key: "Enter" })
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});