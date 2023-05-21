import { Container } from "./styles";
import { ButtonHTMLAttributes } from "react";

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <Container data-testid="button" {...props}>
      {children}
    </Container>
  );
};

export default Button;