import { screen, render, fireEvent, within, waitFor } from "../../utils/tests";
import "jest-styled-components";
import SelectCountry from ".";
import { CountryType } from "@/interfaces";

describe("SelectCountry", () => {
  test("Renders correctly", () => {
    const onChange = jest.fn();
    const country: CountryType = {
      "code": "AL",
      "flag": "https://media.api-sports.io/flags/al.svg",
      "name": "Albania"
    };

    render(
      <SelectCountry
        value={country}
        onChangeValue={onChange}
      />
    );
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
  });

  test("onChange", async () => {
    const onChange = jest.fn();
    const country: CountryType = {
      "code": "AL",
      "flag": "https://media.api-sports.io/flags/al.svg",
      "name": "Albania"
    };

    render(
      <SelectCountry
        value={country}
        onChangeValue={onChange}
      />
    );
    const autocomplete = screen.getByTestId("autocomplete");
    const input = within(autocomplete).getByRole("combobox");
    autocomplete.focus();
    fireEvent.change(input, { target: { value: "brazil" } });
    await waitFor(() => {
      expect(screen.getByText(/brazil/i)).toBeInTheDocument();
    });
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" })
    fireEvent.keyDown(autocomplete, { key: "Enter" })
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});