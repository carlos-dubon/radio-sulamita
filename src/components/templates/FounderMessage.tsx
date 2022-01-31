import { FC } from "react";
import Image from "next/image";
import { SectionQuote } from "@lib/molecules";
import carlos_dubon from "public/carlos-dubon.jpg";

const FounderMessage: FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-[530px] bg-rs-gray">
        <div className="w-full h-full relative" style={{ height: "530px" }}>
          <Image
            src={carlos_dubon}
            alt="Pastor Carlos Dubón"
            layout="fill"
            placeholder="blur"
            objectFit="cover"
            objectPosition="right top"
          />
        </div>
        <div className="flex flex-col justify-center max-w-[555px] p-14">
          <div className="text-3xl mb-1">Carlos Dubón</div>
          <div className="text-stone-600 mb-6">
            Ex-Director General y Fundador
          </div>
          <div className="text-stone-600 leading-7 text-sm">
            “Radio Sulamita 90.1 FM, es una emisora evangélica destinada a
            difundir un mensaje de cambio que permita la restauración,
            edificación, renovación y salvación fundamentada en la palabra de
            Dios. Con una programación variada y bien nutrida, emite su señal
            las veinticuatro horas del día, llegando a casas y lugares
            recónditos del planeta a través de su señal online.”
          </div>
        </div>
      </div>
      <SectionQuote
        secondary
        heading="Jesús le respondió: — Escrito está: “No sólo de pan vive el hombre, sino de toda palabra que sale de la boca de Dios.”"
        buttonText="Donar"
        subHeading="Mateo 4:4"
        scrollTo="donar"
      />
    </>
  );
};

export { FounderMessage };
