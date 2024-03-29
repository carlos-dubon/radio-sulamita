import { useAppSelector, useAppDispatch } from "@app/hooks";
import { FC, useEffect, useState } from "react";
import {
  SwipeableHandlers,
  SwipeEventData,
  useSwipeable,
} from "react-swipeable";
import { toggle as toggleMenu } from "src/state/slices/sidebarSlice";
import { toggle as togglePlayer } from "src/state/slices/playerSlice";
import Link from "next/link";
import {
  faHandHoldingHeart,
  faHeadphonesAlt,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();

  const openState: boolean = useAppSelector((state) => state.sidebar.open);

  const playerState: boolean = useAppSelector((state) => state.player.playing);

  const isAudioLoading: boolean = useAppSelector(
    (state) => state.player.loading
  );

  const [open, setOpen] = useState<boolean>(false);

  const handlers: SwipeableHandlers = useSwipeable({
    onSwipedLeft: (eventData: SwipeEventData) => {
      dispatch(toggleMenu());
    },
  });

  const links: Array<{
    id: string;
    label: string;
  }> = [
    {
      id: "videos",
      label: "Videos",
    },
    {
      id: "collaborators",
      label: "Colaboradores",
    },
    {
      id: "contact",
      label: "Contacto",
    },
  ];

  useEffect(() => {
    if (openState) {
      setTimeout(() => {
        setOpen(true);
      }, 20);
    } else {
      setOpen(false);
      setTimeout(() => {
        setOpen(false);
      }, 20);
    }
  }, [openState]);

  return (
    <div
      {...handlers}
      className={`bg-white text-black fixed top-0 ${
        open ? "left-0" : "-left-full"
      } z-[60] w-9/12 max-w-xs h-full flex flex-col shadow-xl transition-all duration-300 py-3`}
    >
      <Fade duration={450} delay={300}>
        <Link href="/">
          <a
            className="cursor-pointer w-full h-16 flex items-center justify-start px-5 transition-all hover:bg-rs-primary hover:text-white duration-500 text-xs uppercase tracking-wider"
            onClick={() => {
              dispatch(toggleMenu());
            }}
          >
            Inicio
          </a>
        </Link>

        {links.map((link) => {
          return (
            <Link href={`/#${link.id}`} passHref key={link.id}>
              <a
                onClick={() => {
                  dispatch(toggleMenu());
                }}
                className="cursor-pointer w-full h-16 flex items-center justify-start px-5 transition-all hover:bg-rs-primary hover:text-white duration-500 text-xs uppercase tracking-wider"
              >
                {link.label}
              </a>
            </Link>
          );
        })}

        <Link href={"/#donate"} passHref>
          <a
            className="w-full h-16 flex justify-start items-center cursor-pointer px-5 transition-all hover:bg-rs-secondary hover:text-white duration-500 text-xs uppercase tracking-wider"
            onClick={() => {
              dispatch(toggleMenu());
            }}
          >
            Donar
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className={"group-hover:text-white w-4 ml-3"}
            />
          </a>
        </Link>

        <button
          className="w-full h-16 flex justify-start items-center px-5 transition-all bg-rs-primary hover:bg-rs-secondary text-white duration-500 text-xs uppercase tracking-wider"
          onClick={() => {
            dispatch(toggleMenu());
            dispatch(togglePlayer());
          }}
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
        </button>
      </Fade>
    </div>
  );
};

export { Sidebar };
