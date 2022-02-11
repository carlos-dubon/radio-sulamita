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
  SectionRefs,
} from "@lib/templates";
import { WhatsAppFloatingIcon } from "@lib/atoms";
import { MutableRefObject, useRef } from "react";

const Home: NextPage = () => {
  const videosRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const donationsRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const collaboratorsRef: MutableRefObject<HTMLDivElement | null> =
    useRef(null);
  const contactRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const refs = {
    videosRef,
    donationsRef,
    collaboratorsRef,
    contactRef,
  };

  const scrollTo = (section: SectionRefs): void => {
    refs[section].current?.scrollIntoView({ behavior: "smooth" });
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
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Sidebar scrollTo={scrollTo} />
      <Toolbar scrollTo={scrollTo} />

      <HeroSlider />
      <div ref={videosRef}>
        <Videos />
      </div>
      <div ref={donationsRef}>
        <Donations />
      </div>
      <div ref={collaboratorsRef}>
        <Collaborators />
      </div>
      <FounderMessage />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />

      <WhatsAppFloatingIcon />
    </>
  );
};

export default Home;
