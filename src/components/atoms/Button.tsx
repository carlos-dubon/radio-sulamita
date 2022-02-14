import { FC, MouseEventHandler } from "react";
import { SectionRefs } from "@lib/templates";
import { useScrollTo } from "@app/context";

interface Props {
  text: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  secondary?: boolean;
  scrollTo?: SectionRefs;
}

const ButtonComponent: FC<Props> = ({ text, onClick, secondary }) => {
  return (
    <div
      onClick={onClick}
      className={`text-xs tracking-wider uppercase flex justify-center items-center text-white ${
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

const Button: FC<Props> = ({ text, onClick, secondary, scrollTo }) => {
  const scrollToContext = useScrollTo();

  return (
    <>
      {scrollTo ? (
        <ButtonComponent
          text={text}
          onClick={() => {
            scrollToContext?.scrollTo!(scrollTo);
          }}
          secondary={secondary}
        />
      ) : (
        <ButtonComponent text={text} onClick={onClick} secondary={secondary} />
      )}
    </>
  );
};

export { Button };
