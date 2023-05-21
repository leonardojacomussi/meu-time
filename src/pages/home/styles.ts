import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Header = styled.header<HTMLAttributes<HTMLElement>>`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 4rem 15rem 2rem;

  > h1 {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.green[500]};
  };

  > .soccer {
    width: 14.3rem;
    height: 8.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  };
`;

export const Content = styled.main<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  padding: 2rem 15rem;
  overflow-y: auto;
`;