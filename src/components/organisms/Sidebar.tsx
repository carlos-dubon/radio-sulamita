import { useAppSelector, useAppDispatch } from "@app/hooks";
import { FC, useEffect, useState } from "react";
import {
  SwipeableHandlers,
  SwipeEventData,
  useSwipeable,
} from "react-swipeable";
import { toggle } from "src/state/slices/sidebarSlice";

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();

  const openState: boolean = useAppSelector((state) => state.sidebar.open);

  const [open, setOpen] = useState<boolean>(false);

  const handlers: SwipeableHandlers = useSwipeable({
    onSwipedLeft: (eventData: SwipeEventData) => {
      dispatch(toggle());
    },
  });

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
      } z-[60] w-9/12 max-w-xs h-full flex shadow-xl transition-all duration-700`}
    >
      <div>Hello world</div>
    </div>
  );
};

export { Sidebar };
