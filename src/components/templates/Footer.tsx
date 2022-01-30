import { FC } from "react";
import { Logo } from "@lib/atoms";
import Link from "next/link";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: FC = () => {
  const currentYear: number = new Date().getFullYear();

  const navigation: Array<{ anchor: string; title: string }> = [
    {
      anchor: "/",
      title: "Inicio",
    },
    {
      anchor: "/#videos",
      title: "Videos",
    },
    {
      anchor: "/#colaboradores",
      title: "Colaboradores",
    },
    {
      anchor: "/#contacto",
      title: "Contacto",
    },
    {
      anchor: "/#donar",
      title: "Donar",
    },
  ];

  return (
    <div className="-mt-28 bg-rs-secondary py-24 flex justify-center">
      <div className="container">
        <div className="grid grid-cols-3 gap-12">
          <div className="flex flex-col gap-5">
            <Link href="/">
              <a>
                <Logo white />
              </a>
            </Link>
            <div className="text-sm text-stone-200">
              Radio Sulamita 90.1 FM, Transmitiendo desde la puerta del Mundo
              Maya, Melchor de Mencos, Peten, Guatemala.
            </div>
            <div className="text-sm text-stone-200">
              © 2020 — {currentYear} Radio Sulamita. Todos los derechos
              reservados.
            </div>
          </div>

          <div className="flex flex-col">
            <div className=" text-rs-primary mb-5 text-sm ">
              Navegacíon
            </div>

            <div className="flex flex-col gap-1.5 text-sm text-stone-300">
              {navigation.map((link) => (
                <div
                  key={link.anchor}
                  className="hover:text-rs-primary duration-300 w-fit"
                >
                  <Link href={link.anchor}>
                    <a>{link.title}</a>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col text-sm">
            <div className="uppercase text-rs-primary mb-5 text-sm">
              Contacto
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-sm text-stone-300">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-3 mr-2 inline-block"
                />
                Calle de la Sulamita, Barrio Fallabón, Melchor de Mencos, Petén,
                Guatemala.
              </div>

              <div className="flex flex-col">
                <div className="text-sm text-stone-300 gap-3 mb-1">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className="w-3 mr-2 inline-block"
                  />
                  Teléfonos
                </div>

                <div className="flex flex-col text-sm text-stone-300 gap-1">
                  <div>Claro (+502) 7926 5328</div>
                  <div>Tigo (+502) 4685 8545</div>
                  <div>DigiCell (+501) 634 0186</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
