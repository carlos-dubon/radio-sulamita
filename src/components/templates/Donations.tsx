import { FC } from "react";
import Image from "next/image";
import { SectionQuote } from "@lib/molecules";
import Link from "next/link";
import bg from "public/sections/sheep.jpg";
import { Faded } from "baby-i-am-faded";

const Donations: FC = () => {
  return (
    <>
      <div className="h-[745px] relative" id="donate">
        <div
          className="w-full relative top-0 left-0 -z-10"
          style={{ height: "745px" }}
        >
          <Image
            src={bg}
            alt="bg"
            layout="fill"
            placeholder="blur"
            className="brightness-[.35]"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full">
          <div className="container flex flex-col items-center">
            <Faded
              cascade
              whenInView
              className="flex flex-col items-center w-full"
              triggerOnce
            >
              <Image
                src="/donation-heart.svg"
                alt="donation heart"
                width={47}
                height={42}
              />
              <div className="text-white text-4xl mb-10 mt-10">Donaciones</div>
              <div className="text-white text-center mb-3 text-base sm:text-xl sm:w-4/5">
                En todo os mostré que así, trabajando, debéis ayudar a los
                débiles, y recordar las palabras del Señor Jesús, que dijo: “Más
                bienaventurado es dar que recibir.”
              </div>
              <div className="text-stone-300 text-base sm:text-lg mb-16">
                Hechos 20:35
              </div>
            </Faded>
            <div className="text-stone-300 text-center text-sm sm:text-base w-11/12 md:w-3/5 mb-6">
              Si en su corazón desea apoyar a este ministerio económicamente,
              puede hacerlo a través de la cuenta de Banrural No. 300615803, a
              nombre de Vivian Aracely Dubon Guerra.
            </div>
            <div className="text-xs tracking-wider flex justify-center items-center text-white uppercase bg-rs-primary w-48 h-14 transition duration-500 hover:bg-black cursor-pointer hover:drop-shadow-[0_0_16px_rgba(255,221,200,0.25)]">
              <Link href="https://www.banrural.com.gt/cb/pages/jsp-ns/login-cons.jsp">
                <a className="w-full h-full grid items-center">
                  Ir a banca virtual
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <SectionQuote
        heading="¿Necesitas de oración? Escríbenos, queremos orar por ti."
        buttonText="Contacto"
        href="/#contact"
      />
    </>
  );
};

export { Donations };
