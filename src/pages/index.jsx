/* Components */
import Head from "next/head";
import { Welcome } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeLeap - Welcome</title>
      </Head>

      <Welcome />
    </>
  );
}
