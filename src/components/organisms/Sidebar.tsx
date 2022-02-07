import { useAppSelector, useAppDispatch } from "@app/hooks";
import { FC, useEffect, useState } from "react";
import useSwipe from "@adrianbielawski/use-swipe";
import { toggle } from "src/state/slices/sidebarSlice";

const Sidebar: FC = () => {
  const openState: boolean = useAppSelector((state) => state.sidebar.open);
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState<boolean>(false);
  const handleSwipe = (x: number, y: number) => {
    console.log(x, y);
  };

  const handleSwipeEnd = (x: number, y: number, isQuick: boolean) => {
    console.log(x, y, isQuick);

    if(x < -40){
        //close dispatch(toggle());
        dispatch(toggle());
    }
  };

  const swipeRef = useSwipe(handleSwipe, handleSwipeEnd);

  useEffect(() => {
    if (openState) {
      setTimeout(() => {
        setOpen(true);
        console.log({ menuOpened: openState });
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
      ref={swipeRef}
      className={`bg-white text-black fixed top-0 ${
        open ? "left-0" : "-left-full"
      } z-[60] w-9/12 max-w-xs h-full flex shadow-xl transition-all duration-700`}
    >
      <div>Hello world</div>
    </div>
  );
};

export { Sidebar };
