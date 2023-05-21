import { FC,HTMLAttributes } from "react";
import { Container } from "./styles";

const Stepper: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Stepper;