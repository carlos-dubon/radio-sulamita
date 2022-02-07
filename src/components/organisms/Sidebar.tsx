import { useAppSelector, useAppDispatch } from "@app/hooks";
import { FC, useEffect, useState } from "react";
import {
  SwipeableHandlers,
  SwipeEventData,
  useSwipeable,
} from "react-swipeable";
import { toggle } from "src/state/slices/sidebarSlice";
import Link from "next/link";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();

  const openState: boolean = useAppSelector((state) => state.sidebar.open);

  const [open, setOpen] = useState<boolean>(false);

  const handlers: SwipeableHandlers = useSwipeable({
    onSwipedLeft: (eventData: SwipeEventData) => {
      dispatch(toggle());
    },
  });

  const links: Array<{
    target: string;
    label: string;
  }> = [
    {
      target: "/",
      label: "Inicio",
    },
    {
      target: "/#videos",
      label: "Videos",
    },
    {
      target: "/#colaboradores",
      label: "Colaboradores",
    },
    {
      target: "/#contacto",
      label: "Contacto",
    },
  ];

  useEffect(() => {
    if (openState) {
      setTimeout(() => {
        setOpen(true);
      }, 300);
    } else {
      setOpen(false);
      setTimeout(() => {
        setOpen(false);
      }, 300);
    }
  }, [openState]);

  return (
    <div
      {...handlers}
      className={`bg-white text-black fixed top-0 ${
        open ? "left-0" : "-left-full"
      } z-[60] w-9/12 max-w-xs h-full flex flex-col shadow-xl transition-all duration-700 py-3`}
    >
      {links.map((link) => {
        return (
          <div key={link.target}>
            <Link href={link.target}>
              <a
                className="w-full h-16 flex justify-start px-5 transition-all hover:bg-rs-primary hover:text-white duration-500 text-xs uppercase tracking-wider"
                onClick={() => dispatch(toggle())}
              >
                {link.label}
              </a>
            </Link>
          </div>
        );
      })}
      <Link href="/#donar">
        <a
          className="w-full h-16 flex justify-start px-5 transition-all hover:bg-rs-secondary hover:text-white duration-500 text-xs uppercase tracking-wider"
          onClick={() => dispatch(toggle())}
        >
          Donar
          <FontAwesomeIcon
            icon={faHandHoldingHeart}
            className={"group-hover:text-white w-4 ml-3"}
          />
        </a>
      </Link>
    </div>
  );
};

export { Sidebar };
