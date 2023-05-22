import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.75);
`;

export const Content = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  padding: 2rem;

  min-height: 20rem;
`;

export const SelectorContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 70%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 30rem;
  gap: 1rem;

  @media(max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    padding: 2rem;
  };
`;

export const Buttons = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;

  > button {
    width: 8rem;
  };
`;