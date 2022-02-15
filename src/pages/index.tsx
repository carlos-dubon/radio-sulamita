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
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useScrollTo } from "@app/context";
import ReactGA from "react-ga4";
import { analyticsConfig } from "@app/analytics";

const Home: NextPage = () => {
  const videosRef = useRef<HTMLDivElement>(null);
  const donationsRef = useRef<HTMLDivElement>(null);
  const collaboratorsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const refs = useMemo(() => {
    return { videosRef, donationsRef, collaboratorsRef, contactRef };
  }, []);

  const scrollTo = useCallback(
    (section: SectionRefs): void => {
      refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    },
    [refs]
  );

  const scrollToContext = useScrollTo();

  useEffect(() => {
    scrollToContext?.setScrollTo(() => scrollTo);
  }, [scrollTo, scrollToContext]);

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
