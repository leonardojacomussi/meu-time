import { screen, render, fireEvent, within } from "../../utils/tests";
import TextField from "@mui/material/TextField";
import "jest-styled-components";
import Autocomplete from ".";

const options = [
  {label: "Option 1", value: "option1"},
  {label: "Option 2", value: "option2"},
  {label: "Option 3", value: "option3"},
  {label: "Option 4", value: "option4"},
];

describe("Autocomplete", () => {
  test("Renders correctly", () => {
    render(
      <Autocomplete
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
      />
    );
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();
  });

  test("onChange", () => {
    const onChange = jest.fn();
    render(
      <Autocomplete
        options={options}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
      />
    );
    const autocomplete = screen.getByTestId("autocomplete");
    const input = within(autocomplete).getByRole("combobox");
    autocomplete.focus();
    fireEvent.change(input, { target: { value: "O" } });
    expect(screen.getByText(/option 1/i)).toBeInTheDocument();
    expect(screen.getByText(/option 2/i)).toBeInTheDocument();
    expect(screen.getByText(/option 3/i)).toBeInTheDocument();
    expect(screen.getByText(/option 4/i)).toBeInTheDocument();
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" })
    fireEvent.keyDown(autocomplete, { key: "Enter" })
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});