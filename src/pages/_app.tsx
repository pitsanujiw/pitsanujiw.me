import React from "react";

import { AppProps } from "next/app";

import { ThemeProvider, Background } from "../utils";
import "@/styles/main.css";

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Background>
      <Component {...pageProps} />
    </Background>
  </ThemeProvider>
);

export default MyApp;
