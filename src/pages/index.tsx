import type { NextPage } from "next";
import Head from "next/head";
import { Toolbar } from "@lib/organisms";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Radio Sulamita 90.1FM, Melchor de Mencos, Petén, Guatemala.
        </title>
        <meta
          name="description"
          content="Escucha a Radio Sulamita 90.1 FM, la frecuencia del amor de Dios. Transmitiendo desde la puerta del mundo Maya, Melchor de Mencos, Petén, Guatemala."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Toolbar></Toolbar>
    </div>
  );
};

export default Home;
