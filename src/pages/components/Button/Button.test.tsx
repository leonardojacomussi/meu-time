import { screen, render, fireEvent } from "../../../utils/tests";
import "jest-styled-components";
import Button from ".";

describe("Input", () => {
  test("Renders correctly", () => {
    render(<Button>Entrar</Button>);
    const button = screen.getByRole("button", { name: /entrar/i });
    expect(button).toBeInTheDocument();
  });

  test("onClick", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Entrar</Button>);
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("Style", () => {
    render(<Button disabled>Entrar</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveStyle(`
      color: #eaeaea;
      background-color: #2c2c31;
      `);
  });
});