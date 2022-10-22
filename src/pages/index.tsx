import type { NextPage } from "next";
import Head from "next/head";
import { Sidebar, Toolbar } from "@lib/organisms";
import {
  HeroSlider,
  Videos,
  Donations,
  Collaborators,
  Contact,
  FounderMessage,
  Footer,
} from "@lib/templates";
import { WhatsAppFloatingIcon } from "@lib/atoms";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { analyticsConfig } from "@app/analytics";

const Home: NextPage = () => {
  useEffect(() => {
    ReactGA.initialize(analyticsConfig.trackingId);
    ReactGA.send("pageview");
  });

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

      <Sidebar />
      <Toolbar />

      <HeroSlider />
      <Videos />
      <Donations />
      <Collaborators />
      <FounderMessage />
      <Contact />
      <Footer />

      <WhatsAppFloatingIcon />
    </>
  );
};

export default Home;
