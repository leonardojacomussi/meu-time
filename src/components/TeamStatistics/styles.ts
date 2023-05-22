import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 3rem;
  gap: 5rem;

  .txtGreen {
    color: ${({ theme }) => theme.colors.green[500]};
  };

  .txtYellow {
    color: ${({ theme }) => theme.colors.yellow[500]};
  };

  .txtOrange {
    color: ${({ theme }) => theme.colors.orange[500]};
  };
`;

export const About = styled.header<HTMLAttributes<HTMLElement>>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  > div img {
    object-fit: contain;
  };

  margin-top: 4.5rem;
`;

export const Title = styled.h2<HTMLAttributes<HTMLHeadingElement>>`
  width: 100%;
  height: auto;
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 2rem;

  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 1rem;
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

export const Subtitle = styled.h3<HTMLAttributes<HTMLHeadingElement>>`
  position: relative;
  width: fit-content;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.gray[200]};

  ::after {
    content: "";
    position: absolute;
    top: 3.5rem;
    left: 0;
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.gray[400]};
  };
`;

export const Results = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TableOfResults = styled.table<HTMLAttributes<HTMLTableElement>>`
  width: 100%;
  border-collapse: collapse;

  td, th {
    text-align: center;
    padding: 1rem 2rem;

    :not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.colors.gray[300]};
    };
  };
`;

export const ChartContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column;
  gap: 4rem 2rem;

  width: 100%;
  height: auto;
`;

export const ChartAtHome = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  width: 100%;
  height: auto;

  > div {
    width: calc(50% - 1rem);
    height: fit-content;
  }
`;

export const ChartAway = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  width: 100%;
  height: auto;

  > div {
    width: calc(50% - 1rem);
    height: fit-content;
  }
`;

export const Lineups = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > span {
    display: flex;
    gap: 2rem;
  };

  > .pos-1 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.yellow[200]};

    > svg {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.colors.yellow[500]};
      margin-right: 1rem;
    };
  };

  > .pos-2 {
    font-size: 1.8rem;

    > svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.gray[200]};
      margin-right: 1rem;
    };
  };

  > .pos-3 {
    font-size: 1.8rem;

    > svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.yellow[900]};
      margin-right: 1rem;
    };
  };
`;

export const Players = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TableOfPlayers = styled.table<HTMLAttributes<HTMLTableElement>>`
  width: 100%;
  border-collapse: collapse;
  empty-cells: show;

  td, th {
    text-align: center;
    padding: 1rem 2rem;

    :not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.colors.gray[300]};
    };
  };

  .avatar {
    width: fit-content;
    height: auto;
    margin: 0 auto;

    > img {
      border-radius: 50% !important;
      object-fit: cover;
    };
  };
`;