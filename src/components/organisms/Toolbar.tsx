import { FC } from "react";
import { Logo, ToolbarButton, IconLink } from "@lib/atoms";
import {
  faWhatsapp,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

export const Toolbar: FC = () => {
  return (
    <div className="flex flex-col drop-shadow-2xl">
      <div className="h-16 flex items-center justify-center bg-rs-secondary">
        <div className="container flex justify-between">
          <div className="flex gap-4 items-center">
            <IconLink
              icon={faFacebookMessenger}
              href="https://www.facebook.com/estereo.sulamita"
            />
            <IconLink icon={faWhatsapp} href="https://wa.link/logvtp" />
          </div>
          <div className="text-rs-primary text-sm">Siguiente aniversario:</div>
        </div>
      </div>
      <div className="h-20 flex justify-center bg-white">
        <div className="container flex items-center h-full justify-between">
          <Logo />
          <div>
            <ToolbarButton>Escúchanos</ToolbarButton>
          </div>
        </div>
      </div>
    </div>
  );
};
