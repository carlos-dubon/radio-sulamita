import { FC } from "react";
import { Logo, ToolbarButton, IconLink } from "@lib/atoms";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faHandHoldingHeart,
  faHeadphonesAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";

export const Toolbar: FC = () => {
  // fix to: Text content did not match. Server Client
  const Countdown = dynamic<{}>(
    import("@lib/atoms").then((module) => module.Countdown),
    { ssr: false }
  );

  return (
    <div className="flex flex-col drop-shadow-2xl">
      <div className="h-16 flex items-center justify-center bg-rs-secondary">
        <div className="container flex justify-between">
          <div className="flex gap-4 items-center">
            <IconLink
              icon={faFacebook}
              href="https://www.facebook.com/estereo.sulamita"
            />
            <IconLink icon={faWhatsapp} href="https://wa.link/logvtp" />
          </div>
          <Countdown />
        </div>
      </div>

      <div className="sticky top-0 h-20 flex justify-center bg-white">
        <div className="container flex items-center h-full justify-between">
          <Logo />
          <div className="flex">
            <ToolbarButton>Inicio</ToolbarButton>
            <ToolbarButton>Videos</ToolbarButton>
            <ToolbarButton>Colaboradores</ToolbarButton>
            <ToolbarButton
              className="group"
              hoverBackgroundColor="hover:bg-black"
              primary={true}
            >
              <FontAwesomeIcon
                icon={faHandHoldingHeart}
                className="group-hover:text-white w-4"
              />
            </ToolbarButton>
            <ToolbarButton
              backgroundColor="bg-rs-primary"
              hoverBackgroundColor="hover:bg-black"
              textColor="text-white"
              primary={true}
            >
              Reproducir
              <FontAwesomeIcon icon={faHeadphonesAlt} className="w-4 ml-3" />
            </ToolbarButton>
          </div>
        </div>
      </div>
    </div>
  );
};
