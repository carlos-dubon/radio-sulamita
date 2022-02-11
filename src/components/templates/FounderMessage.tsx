import { FC, useState } from "react";
import Image from "next/image";
import { SectionQuote } from "@lib/molecules";
import carlosDubon from "public/carlos-dubon.jpg";
import { useBreakpoint } from "@app/hooks";
import { Fade } from "react-awesome-reveal";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";

const FounderMessage: FC = () => {
  const tailwindSm: boolean = useBreakpoint("sm");

  const [photoHeight, setPhotoHeight] = useState<"530px" | "390px">("530px");

  useIsomorphicLayoutEffect(() => {
    tailwindSm ? setPhotoHeight("530px") : setPhotoHeight("390px");
    window.dispatchEvent(new Event("resize"));
  }, [tailwindSm]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[530px] bg-rs-gray">
        <div className="w-full h-full relative" style={{ height: photoHeight }}>
          <Image
            src={carlosDubon}
            alt="Pastor Carlos Dubón"
            layout="fill"
            placeholder="blur"
            objectFit="cover"
            objectPosition="right top"
          />
        </div>
        <div className="flex flex-col justify-center md:max-w-[555px] px-7 py-24 md:p-14">
          <Fade cascade duration={400} direction="up" triggerOnce>
            <div className="text-3xl mb-1">Carlos Dubón</div>
            <div className="text-stone-600">Ex-Director General y Fundador</div>
            <div className="text-stone-600 leading-7 text-sm mt-6">
              “Radio Sulamita 90.1 FM, es una emisora evangélica destinada a
              difundir un mensaje de cambio que permita la restauración,
              edificación, renovación y salvación fundamentada en la palabra de
              Dios. Con una programación variada y bien nutrida, emite su señal
              las veinticuatro horas del día, llegando a casas y lugares
              recónditos del planeta a través de su señal online.”
            </div>
          </Fade>
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
