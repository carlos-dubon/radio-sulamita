import { FC } from "react";

interface Props {
  text: string;
  onClick: () => void;
  secondary?: boolean;
}

const Button: FC<Props> = ({ text, onClick, secondary = false }) => {
  return (
    <div
      onClick={() => onClick()}
      className={`text-sm flex justify-center items-center text-white ${
        secondary ? "bg-rs-secondary" : "bg-rs-primary"
      } w-36 h-14 transition duration-500 ${
        secondary ? "hover:bg-rs-primary" : "hover:bg-black"
      } cursor-pointer ${
        secondary
          ? "hover:drop-shadow-[0_0_16px_rgba(27,27,27,0.25)]"
          : "hover:drop-shadow-[0_0_16px_rgba(255,221,200,0.25)]"
      }`}
    >
      {text}
    </div>
  );
};

export { Button };
