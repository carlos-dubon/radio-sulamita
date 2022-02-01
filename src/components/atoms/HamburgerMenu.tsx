import { FC } from "react";
import { useAppSelector, useAppDispatch } from "@app/hooks";
import { toggle } from "src/state/slices/sidebarSlice";

const HamburgerMenu: FC = () => {
  const open: boolean = useAppSelector((state) => state.sidebar.open);

  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    dispatch(toggle());
  };

  return (
    <div
      id="menu-toggle"
      className={`${open ? "open" : ""}`}
      onClick={handleClick}
    >
      <div id="hamburger">
        <span className="menu-span" />
        <span className="menu-span" />
        <span className="menu-span" />
      </div>
      <div id="cross">
        <span className="menu-span" />
        <span className="menu-span" />
      </div>
    </div>
  );
};

export { HamburgerMenu };
