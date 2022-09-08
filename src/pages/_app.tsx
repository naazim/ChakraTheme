import type { AppProps } from "next/app";
import { useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { getTheme } from "../theme";
import { ThemeSelector } from "../components/themeSelector";

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState("vw");

  const handleThemeSelect = (e: { target: any }) =>
    setCurrentTheme(e.target.value);

  return (
    <ChakraProvider theme={getTheme(currentTheme || pageProps.query.theme)}>
      <ThemeSelector onSelect={handleThemeSelect} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
