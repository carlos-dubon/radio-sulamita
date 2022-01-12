import type { NextPage } from "next";
import Head from "next/head";

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

      <h1 className="text-3xl font-bold underline text-red-900">
        Hello world!
      </h1>
    </div>
  );
};

export default Home;
