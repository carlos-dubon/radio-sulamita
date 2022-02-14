import { FC } from "react";
import { Logo, ToolbarButton, IconLink, HamburgerMenu } from "@lib/atoms";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faHandHoldingHeart,
  faHeadphonesAlt,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import { useAppSelector, useAppDispatch } from "@app/hooks";
import { toggle } from "src/state/slices/playerSlice";
import { RootState } from "src/state/store";
import Link from "next/link";
import { useScrollTo } from "@app/context";

export const Toolbar: FC = () => {
  const scrollToContext = useScrollTo();

  const playerState: boolean = useAppSelector(
    (state: RootState) => state.player.playing
  );

  const isAudioLoading: boolean = useAppSelector(
    (state: RootState) => state.player.loading
  );

  const dispatch = useAppDispatch();

  // fix to: Text content did not match. Server Client
  const Countdown = dynamic<{}>(
    import("@lib/atoms").then((module) => module.Countdown),
    { ssr: false }
  );

  return (
    <>
      <div className="relative top-0 left-0 z-30 sm:h-16 py-6 sm:py-0 flex items-center justify-center bg-rs-secondary">
        <div className="container flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
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

      <div className="sticky top-0 left-0 z-50">
        <div className="h-20 flex justify-center bg-white drop-shadow-2xl">
          <div className="container flex items-center h-full justify-between">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
            <div className="lg:hidden">
              <HamburgerMenu />
            </div>
            <div className="hidden lg:flex">
              <ToolbarButton href="/">Inicio</ToolbarButton>
              <ToolbarButton
                onClick={() => {
                  scrollToContext?.scrollTo!("videosRef");
                }}
              >
                Videos
              </ToolbarButton>
              <ToolbarButton
                onClick={() => {
                  scrollToContext?.scrollTo!("collaboratorsRef");
                }}
              >
                Colaboradores
              </ToolbarButton>
              <ToolbarButton
                onClick={() => {
                  scrollToContext?.scrollTo!("contactRef");
                }}
              >
                Contacto
              </ToolbarButton>
              <ToolbarButton
                className="group"
                hoverBackgroundColor="hover:bg-black"
                primary={true}
                onClick={() => {
                  scrollToContext?.scrollTo!("donationsRef");
                }}
                title="Donar"
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
                onClick={() => dispatch(toggle())}
                disabled={isAudioLoading}
              >
                {isAudioLoading
                  ? "Cargando..."
                  : playerState
                  ? "Pausar"
                  : "Reproducir"}
                {!isAudioLoading ? (
                  <FontAwesomeIcon
                    icon={playerState ? faPauseCircle : faHeadphonesAlt}
                    className="w-4 ml-3"
                  />
                ) : null}
              </ToolbarButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
