import { screen, render, fireEvent } from "../../../utils/tests";
import { FiKey } from "react-icons/fi";
import "jest-styled-components";
import Input from ".";

describe("Input", () => {
  test("Renders correctly", () => {
    render(<Input icon={FiKey} placeholder="API key"/>);
    const input = screen.getByPlaceholderText("API key");
    expect(input).toBeInTheDocument();
  });

  test("onChange", () => {
    const onChange = jest.fn();
    render(<Input type="text" icon={FiKey} onChange={onChange} placeholder="API key"/>);
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "ABCDEF" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test("onFocus", () => {
    render(<Input type="text" icon={FiKey} placeholder="API key"/>);
    const container = screen.getByTestId("container");
    const input = screen.getByTestId("input");
    fireEvent.focus(input);
    expect(container).toHaveStyle({
      outline: "1px solid #04d361"
    });
    fireEvent.blur(input);
    expect(container).not.toHaveStyle({
      outline: "1px solid #04d361"
    });
  });
});