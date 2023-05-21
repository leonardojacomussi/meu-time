import { FC, InputHTMLAttributes } from "react";
import { IconType } from "react-icons/lib";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType,
};

const Input: FC<InputProps> = ({ icon: Icon, className, ...props }): JSX.Element => {
  return (
    <Container
      data-testid="container"
      className={className ? className : ""}
    >
      {Icon && <div className="icon"><Icon /></div>}
      <input
        {...props}
        data-testid="input"
      />
    </Container>
  );
};

export default Input;