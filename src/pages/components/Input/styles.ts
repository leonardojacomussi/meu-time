import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray[800]};
  color: ${({ theme }) => theme.colors.gray[50]};

  margin-bottom: .8rem;
  border-radius: ${({ theme }) => theme.border.radius};

  &.onFocus {
    outline: 1px solid ${({ theme }) => theme.colors.green[500]};
  };

  > input {
    height: 5.6rem;
    width: 100%;
    color: ${({ theme }) => theme.colors.gray[50]};

    padding: 1.2rem;
    background-color: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[300]};
    };
  };

  > .icon {
    width: 5.1rem;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.gray[900]};
    border-top-left-radius: ${({ theme }) => theme.border.radius};
    border-bottom-left-radius: ${({ theme }) => theme.border.radius};
  };

`;