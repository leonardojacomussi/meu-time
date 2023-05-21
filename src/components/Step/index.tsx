import { FC } from "react";
import { Container } from "./styles";
import StepProps from "./StepProps";

const Step: FC<StepProps> = ({ active, completed, label, step, ...props }) => {
  return (
    <Container active={active} completed={completed} {...props}>
      <div className="counter">
        {step}
      </div>
      <span className="label">
        {label}
      </span>
    </Container>
  );
};

export default Step;