/* Components */
import Head from "next/head";
import { LayoutContainer } from "./Layout.style";

export default function Layout({ children, classN }) {
  return (
    <>
      <Head>
        <meta name="description" content="Codeleap Engineering Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <LayoutContainer className={classN}>{children}</LayoutContainer>
    </>
  );
}
