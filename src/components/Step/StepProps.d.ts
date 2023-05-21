import { HTMLAttributes } from "react";

export default interface StepProps extends HTMLAttributes<HTMLDivElement> {
  step: number;
  label: string;
  active: boolean;
  completed: boolean;
};

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  active: boolean;
  completed: boolean;
};