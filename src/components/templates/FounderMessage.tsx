import { FC } from "react";
import Image from "next/image";
import { SectionQuote } from "@lib/molecules";

interface Props {
  goToDonations: () => void;
}

const FounderMessage: FC<Props> = ({ goToDonations }) => {
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
        <div className="flex flex-col justify-center max-w-[555px] p-14">
          <div className="text-3xl font-medium mb-1">Carlos Dubón</div>
          <div className="text-stone-600 mb-6 text-sm">
            Ex-Director General y Fundador
          </div>
          <div className="absolute z-10 -translate-y-[4.6rem] translate-x-[13.8rem] -rotate-12">
            <Image
              src="/black-ribbon.svg"
              alt="black ribbon"
              width={28.25}
              height={31}
              title="Descanse en paz."
            />
          </div>
          <div className="text-sm text-stone-600 leading-7">
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
        buttonClick={() => {
          goToDonations();
        }}
      />
    </>
  );
};

export { FounderMessage };
