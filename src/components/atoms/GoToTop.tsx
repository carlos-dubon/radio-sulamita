import { FC } from "react";
import useScrollPosition from "@react-hook/window-scroll";
import Image from "next/image";

const GoToTop: FC = () => {
  const scrollY: number = useScrollPosition(24);

  return (
    <div
      className={`${
        scrollY > 1000 ? "flex" : "hidden"
      } w-10 h-10 justify-center items-center bg-rs-primary shadow-2xl fixed right-11 bottom-11 z-40 hover:bg-rs-secondary duration-500 cursor-pointer`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className="rotate-90">
        <Image
          src="/slider/navigation.svg"
          alt="arrow"
          width={10}
          height={12}
          priority
        />
      </div>
    </div>
  );
};

export { GoToTop };
