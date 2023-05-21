import styled from "styled-components";
import { ContainerProps } from "./StepProps";

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  background-color: ${({ theme, active }) => {
    if (active) return theme.colors.green[500];
    return theme.colors.gray[600];
  }};
  color: ${({ theme, active, completed }) => {
    if (active) return theme.colors.gray[900];
    if (completed) return theme.colors.gray[300];
    return theme.colors.gray[50];
  }};

  .counter {
    width: 2.8rem;
    height: 2.8rem;

    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme, active, completed }) => {
      if (active) return theme.colors.gray[900];
      if (completed) return theme.colors.gray[50];
      return theme.colors.gray[300];
    }};
    color: ${({ theme, active, completed }) => {
      if (active) return theme.colors.gray[50];
      if (completed) return theme.colors.gray[900];
      return theme.colors.gray[50];
    }};
  };

  .label {
    font-size: 1.6rem;
    color: ${({ theme, active, completed }) => {
      if (active) return theme.colors.gray[900];
      if (completed) return theme.colors.gray[50];
      return theme.colors.gray[300];
    }};
  }
`;