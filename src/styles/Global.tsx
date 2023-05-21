import { Roboto } from "next/font/google";
import { createGlobalStyle } from "styled-components";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  };

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  html {
    font-family: ${roboto.style.fontFamily};
  };

  body {
    background-color: ${({ theme }) => theme.colors.gray[500]};
    color: ${({ theme }) => theme.colors.gray[50]};
    -webkit-font-smoothing: antialiased;
  };

  body, input, button, textarea {
    font-size: 1.6rem;
    outline: none;
  };

  a {
    text-decoration: none;
  };

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  };

  button:hover, a:hover {
    filter: brightness(.9);
  };

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  };

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[800]};
  };

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.green[500]};
    border-radius: 8px;
  };
`;

export default GlobalStyle;