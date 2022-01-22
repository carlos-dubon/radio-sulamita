import type { NextPage } from "next";
import Head from "next/head";
import { Toolbar } from "@lib/organisms";
import { HeroSlider, Videos, Donations } from "@lib/templates";
import { useRef } from "react";

const Home: NextPage = () => {
  const videosRef = useRef<HTMLDivElement | null>(null);
  const donationsRef = useRef<HTMLDivElement | null>(null);

  const goToVideos = (): void => {
    videosRef.current?.scrollIntoView();
  };

  const goToDonations = (): void => {
    donationsRef.current?.scrollIntoView();
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

      <Toolbar goToVideos={goToVideos} goToDonations={goToDonations} />
      <HeroSlider />
      <div ref={videosRef}>
        <Videos />
      </div>
      <div ref={donationsRef}>
        <Donations />
      </div>
      <div style={{ height: "1000vh" }}></div>
    </>
  );
};

export default Home;
