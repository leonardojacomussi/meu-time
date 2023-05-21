import { FC } from "react";
import Head from "next/head";
import theme from "@/styles/theme";
import muiTheme from "@/styles/muiTheme";
import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/Global";
import { SnackbarProvider } from "notistack";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache: EmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache
};

const App: FC<MyAppProps> = ({
  Component, pageProps, emotionCache = clientSideEmotionCache
 }): JSX.Element => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Meu time</title>
        <meta charSet="utf-8" lang="pt-br" />
        <meta name="description" content="Meu time - o aplicativo do torcedor fanático!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Theme settings */}
        <meta name="color-scheme" content="dark light" />
        {/* <!-- Chrome, Firefox OS and Opera --> */}
        <meta name="theme-color" content={theme.colors.gray[400]} />
        {/* <!-- Windows Phone --> */}
        <meta name="msapplication-navbutton-color" content={theme.colors.gray[400]} />
        {/* <!-- iOS Safari --> */}
        <meta name="apple-mobile-web-app-status-bar-style" content={theme.colors.gray[400]} />
      </Head>
      <MuiThemeProvider theme={muiTheme}>
        <SCThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={5} style={{ fontSize: "1.6rem" }}>
            <GlobalStyle />
            <Component {...pageProps} />
          </SnackbarProvider>
        </SCThemeProvider>
      </MuiThemeProvider>
    </CacheProvider>
  );
};

export default App;