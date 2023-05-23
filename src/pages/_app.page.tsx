import { FC, useEffect } from "react";
import Head from "next/head";
import theme from "@/styles/theme";
import muiTheme from "@/styles/muiTheme";
import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/Global";
import { SnackbarProvider } from "notistack";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useRouter, NextRouter } from "next/router";
import createEmotionCache from "../utils/createEmotionCache";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { LoadingContentProvider } from "@/contexts/LoadingContentContext";
import useLoadingContent from "@/hooks/useLoadingContent";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache: EmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache
};

const App: FC<MyAppProps> = ({
  Component, pageProps, emotionCache = clientSideEmotionCache
}): JSX.Element => {
  const router: NextRouter = useRouter();
  const { changeLoadingContent } = useLoadingContent();

  useEffect(() => {
    const handleStart = () => changeLoadingContent(true);
    const handleStop = () => changeLoadingContent(false);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

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
        {/* [INIT] Open Graph Protocol */}
        <meta property="og:url" content="https://meu-time-leonardojacomussi.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Meu time" />
        <meta property="og:description" content="Meu time - o aplicativo do torcedor fanático!" />
        <meta property="og:image" content="https://raw.githubusercontent.com/leonardojacomussi/meu-time/main/.github/preview_signin.png" />
        {/* [END] Open Graph Protocol */}
      </Head>
      <MuiThemeProvider theme={muiTheme}>
        <SCThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={5} style={{ fontSize: "1.6rem" }}>
            <LoadingContentProvider>
              <GlobalStyle />
              <Component {...pageProps} />
            </LoadingContentProvider>
          </SnackbarProvider>
        </SCThemeProvider>
      </MuiThemeProvider>
    </CacheProvider>
  );
};

export default App;