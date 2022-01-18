import { FC } from "react";

interface Props {
  text: string;
  onClick: () => void;
}

const Button: FC<Props> = ({ text, onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      className="text-sm flex justify-center items-center text-white bg-rs-primary w-36 h-14 transition duration-500 hover:bg-black cursor-pointer hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.25)]"
    >
      {text}
    </div>
  );
};

export { Button };
