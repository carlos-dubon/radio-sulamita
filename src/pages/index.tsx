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
import { useRef } from "react";

const Home: NextPage = () => {
  const videosRef = useRef<HTMLDivElement | null>(null);
  const donationsRef = useRef<HTMLDivElement | null>(null);
  const colaboratorsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const goToVideos = (): void => {
    videosRef.current?.scrollIntoView();
  };

  const goToDonations = (): void => {
    donationsRef.current?.scrollIntoView();
  };

  const goToColaborators = (): void => {
    colaboratorsRef.current?.scrollIntoView();
  };

  const goToContact = (): void => {
    contactRef.current?.scrollIntoView();
  };

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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Toolbar
        goToVideos={goToVideos}
        goToDonations={goToDonations}
        goToColaborators={goToColaborators}
        goToContact={goToContact}
      />

      <HeroSlider goToDonations={goToDonations} />

      <div ref={videosRef}>
        <Videos />
      </div>

      <div ref={donationsRef}>
        <Donations goToContact={goToContact} />
      </div>

      <div ref={colaboratorsRef}>
        <Collaborators />
      </div>

      <FounderMessage goToDonations={goToDonations} />

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default Home;
