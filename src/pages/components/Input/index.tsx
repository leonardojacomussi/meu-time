import { FC, InputHTMLAttributes, useState } from "react";
import { IconType } from "react-icons/lib";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType,
};

const Input: FC<InputProps> = ({ icon: Icon, className, ...props }): JSX.Element => {
  const [onFocusClass, setOnFocusClass] = useState<string>("");

  return (
    <Container
      data-testid="container"
      className={className ? `${className} ${onFocusClass}` : onFocusClass}
    >
      {Icon && <div className="icon"><Icon /></div>}
      <input
        {...props}
        data-testid="input"
        onBlur={() => setOnFocusClass("")}
        onFocus={() => setOnFocusClass("onFocus")}
      />
    </Container>
  );
};

export default Input;