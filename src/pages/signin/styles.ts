import { HTMLAttributes, FormHTMLAttributes } from "react";
import styled from "styled-components";
import backgroundImg from "../../../public/assets/background.jpg";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  height: 100vh;

  display: flex;
  align-items: stretch; // estica o conteúdo para ocupar a tela toda
`;

export const Form = styled.form<FormHTMLAttributes<HTMLDivElement>>`
  padding: 0 clamp(2rem, 5vw, 10rem);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8rem;

  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.colors.green[500]};
  };

  > .formContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    width: clamp(27rem, 15vw, 50rem);

    > .inputContainer {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    };

    > a {
      color: ${({ theme }) => theme.colors.gray[200]};
    };
  };

  @media(max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  };
`;

export const Background = styled.div<HTMLAttributes<HTMLDivElement>>`
  flex: 1;
  background: url(${backgroundImg.src}) no-repeat center center;
  background-size: cover;
  opacity: 0.3;

  @media(max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  };
`;