/* Components */
import { GlobalStyle, ResetStyle } from "@/styles";
import { Layout } from "@/components";
import { Roboto } from "next/font/google";

/* Logic */
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import THEME from "@/styles/theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const [theme] = useState(THEME);

  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />

      <Provider store={store}>
        <Layout classN={roboto.className}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}
