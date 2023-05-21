import "styled-components";

interface IPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      "gray": IPalette,
      "purple": IPalette,
      "orange": IPalette,
      "yellow": IPalette,
      "green": IPalette,
    },
    border: {
      "radius": string,
    },
    breakpoints: {
      "sm": string,
      "md": string,
      "lg": string,
      "xl": string,
    },
  };
};