import { FC } from "react";
import { IconLink, Logo } from "@lib/atoms";
import Link from "next/link";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
        <div className="grid grid-cols-3 gap-36">
          <div className="flex flex-col gap-6">
            <Link href="/">
              <a>
                <Logo white />
              </a>
            </Link>

            <div className="flex gap-4 items-center">
              <IconLink
                secondary
                icon={faFacebook}
                href="https://www.facebook.com/estereo.sulamita"
              />
              <IconLink
                secondary
                icon={faWhatsapp}
                href="https://wa.link/logvtp"
              />
            </div>

            <div className="text-xs text-rs-primary">
              Radio Sulamita 90.1 FM, Transmitiendo desde la puerta del Mundo
              Maya, Melchor de Mencos, Peten, Guatemala.
            </div>
            <div className="text-xs text-rs-primary">
              © 2020 — {currentYear} Radio Sulamita. Todos los derechos
              reservados.
            </div>
          </div>

          <div className="flex flex-col">
            <div className=" text-white mb-6 tracking-wide">Navegacíon</div>

            <div className="flex flex-col gap-3 text-xs text-stone-200">
              {navigation.map((link) => (
                <div
                  key={link.anchor}
                  className="hover:text-rs-primary duration-300 w-fit border-transparent hover:border-rs-primary border-b-[1px] pb-1"
                >
                  <Link href={link.anchor}>
                    <a>{link.title}</a>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-white mb-6 tracking-wide">Contacto</div>

            <div className="flex flex-col gap-5 text-xs text-stone-200">
              <div className="text-rs-primary border-rs-primary border-b-[1px] pb-1 w-fit">
                Dirección:
              </div>

              <div>
                Calle de la Sulamita, Barrio Fallabón, Melchor de Mencos, Petén,
                Guatemala.
              </div>

              <div className="text-rs-primary border-rs-primary border-b-[1px] pb-1 w-fit">
                Teléfonos:
              </div>

              <div className="flex flex-col gap-1.5">
                <div>Claro: (+502) 7926 5328</div>
                <div>Tigo: (+502) 4685 8545</div>
                <div>DigiCell: (+501) 634 0186</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
