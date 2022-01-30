import type { NextPage } from "next";
import Head from "next/head";
import { Toolbar } from "@lib/organisms";
import {
  HeroSlider,
  Videos,
  Donations,
  Collaborators,
  Contact,
  FounderMessage,
  Footer,
} from "@lib/templates";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Radio Sulamita 90.1FM, Melchor de Mencos, Petén, Guatemala.
        </title>
        <meta
          name="description"
          content="Escucha a Radio Sulamita 90.1 FM, la frecuencia del amor de Dios. Transmitiendo desde la puerta del mundo Maya, Melchor de Mencos, Petén, Guatemala."
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Toolbar />
      <HeroSlider />
      <Videos />
      <Donations />
      <Collaborators />
      <FounderMessage />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
