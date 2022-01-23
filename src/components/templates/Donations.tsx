import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "next/image";
import { Button } from "@lib/atoms";
import { SectionQuote } from "@lib/molecules";
import { useRouter } from "next/router";

interface Props {
  goToContact: () => void;
}

const Donations: FC<Props> = ({ goToContact }) => {
  const router = useRouter();
  return (
    <>
      <div className="h-[745px] relative">
        <div
          className="w-full relative top-0 left-0 -z-10"
          style={{ height: "745px" }}
        >
          <LazyLoadImage
            height="745px"
            width="100%"
            placeholderSrc="/sections/lazy-load/sheep.jpg"
            src="/sections/sheep.jpg"
            alt="sheep"
            className="brightness-[.35] object-cover object-bottom h-[745px]"
          />
        </div>

        <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full">
          <div className="container flex flex-col items-center">
            <Image
              src="/donation-heart.svg"
              alt="donation heart"
              width={47}
              height={42}
            />
            <div className="text-white text-4xl font-semibold mb-10 mt-10">
              Donaciones
            </div>
            <div className="text-white text-center text-lg w-4/5 mb-2">
              En todo os mostré que así, trabajando, debéis ayudar a los
              débiles, y recordar las palabras del Señor Jesús, que dijo: “Más
              bienaventurado es dar que recibir.”
            </div>
            <div className="text-stone-300 text-lg mb-10">Hechos 20:35</div>
            <div className="text-stone-300 text-center text-sm w-4/5 mb-4">
              Si en su corazón desea apoyar a este ministerio económicamente,
              puede hacerlo a través de la cuenta de Banrural No. 3020005791, a
              nombre de Fabiola Migdalia Guerra.
            </div>
            <Button
              text="Ir a banca virtual"
              onClick={() => {
                router.push(
                  "https://www.banrural.com.gt/cb/pages/jsp-ns/login-cons.jsp"
                );
              }}
            />
          </div>
        </div>
      </div>

      <SectionQuote
        heading="¿Necesitas de oración? Escríbenos, queremos orar por ti."
        buttonText="Contacto"
        buttonClick={() => {
          goToContact();
        }}
      />
    </>
  );
};

export { Donations };
