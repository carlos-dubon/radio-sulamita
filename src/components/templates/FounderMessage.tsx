import { FC } from "react";
import Image from "next/image";
import { SectionQuote } from "@lib/molecules";

const FounderMessage: FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-[530px] bg-rs-gray">
        <div className="w-full h-full relative">
          <Image
            src="/carlos-dubon.jpg"
            alt="Pastor Carlos Dubón"
            className="w-full h-full"
            objectFit="cover"
            objectPosition="right top"
            layout="fill"
          />
        </div>
        <div className="flex flex-col justify-center w-2/3 pl-16">
          <div className="text-3xl font-medium mb-1">Carlos Dubón</div>
          <div className="text-stone-600 mb-6">
            Ex-Director General y Fundador
          </div>
          <div className="text-sm text-stone-600 leading-7">
            Radio Sulamita 90.1 FM, es una emisora evangélica destinada a
            difundir un mensaje de cambio que permita la restauración,
            edificación, renovación y salvación fundamentada en la palabra de
            Dios. Con una programación variada y bien nutrida, emite su señal
            las 24 horas del día, llegando a casas y lugares recónditos del
            planeta a través de su señal online.
          </div>
        </div>
      </div>
      <SectionQuote
        heading="Jesús le respondió: — Escrito está: “No sólo de pan vive el hombre, sino de toda palabra que sale de la boca de Dios.”"
        buttonText="Donar"
        subHeading="Mateo 4:4"
        buttonClick={() => {}}
      />
    </>
  );
};

export { FounderMessage };
