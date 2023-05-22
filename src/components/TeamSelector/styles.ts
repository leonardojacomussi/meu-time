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

  :focus-within {
    outline: 1px solid ${({ theme }) => theme.colors.green[500]};
  };

  .MuiOutlinedInput-root {
    fieldset {
      display: none;
    };
  };

  .MuiInputBase-root {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  };
`;

export const Logo = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 5.1rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.gray[900]};
  border-top-left-radius: ${({ theme }) => theme.border.radius};
  border-bottom-left-radius: ${({ theme }) => theme.border.radius};
`;