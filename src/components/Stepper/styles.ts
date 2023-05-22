import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: stretch;
  align-items: stretch;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};

  > div:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.gray[200]};
  };

  @media(max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;

    > div {
      justify-content: flex-start;
      padding-left: 2rem;
    }

    > div:not(:last-child) {
      border-right: none;
    };
  };
`;