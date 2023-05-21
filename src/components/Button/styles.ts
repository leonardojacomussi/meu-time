import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

export const Container = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  width: 100%;
  height: 6rem;

  border: none;
  color: ${({ theme }) => theme.colors.gray[900]};
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.colors.green[500]};

  :active {
    background-color: ${({ theme }) => theme.colors.green[700]};
  };

  :disabled {
    color: ${({ theme }) => theme.colors.gray[50]};
    background-color: ${({ theme }) => theme.colors.gray[500]};
  };
`;