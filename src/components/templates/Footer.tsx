import { FC } from "react";
import { Logo } from "@lib/atoms";
import Link from "next/link";

const Footer: FC = () => {
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
            <div className="text-sm text-white">
              Radio Sulamita 90.1 FM, Transmitiendo desde la puerta del Mundo
              Maya, Melchor de Mencos, Peten, Guatemala.
            </div>
            <div className="text-sm text-white">
              © 2020 — {new Date().getFullYear()} Radio Sulamita. Todos los
              derechos reservados.
            </div>
          </div>

          <div className="flex flex-col">
            <div className="uppercase text-rs-primary">Navegacíon</div>
          </div>

          <div className="flex flex-col">
            <div className="uppercase text-rs-primary">Contacto</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
