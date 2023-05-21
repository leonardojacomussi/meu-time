import "@testing-library/jest-dom";
import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

import theme from "../styles/theme";
import muiTheme from "../styles/muiTheme";
import GlobalStyles from "../styles/Global";
import { SnackbarProvider } from "notistack";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./createEmotionCache";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

type CustomRenderProps = Omit<RenderOptions, "queries">;

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache: EmotionCache = createEmotionCache();

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) =>
  render(
    <CacheProvider value={clientSideEmotionCache}>
      <MuiThemeProvider theme={muiTheme}>
        <SCThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={5} style={{ fontSize: "1.6rem" }}>
            <GlobalStyles />
            {ui}
          </SnackbarProvider>
        </SCThemeProvider>
      </MuiThemeProvider>
    </CacheProvider>,
    renderOptions
  );

export * from "@testing-library/react";
export { customRender as render };