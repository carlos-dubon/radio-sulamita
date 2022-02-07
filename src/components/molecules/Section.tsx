import { FC, ReactNode } from "react";
import { Fade } from "react-awesome-reveal";

interface Props {
  title: string;
  subtitle: string;
  bibleVerse: string;
  children: ReactNode;
  removeBottom?: boolean;
  id?: string;
}

const Section: FC<Props> = ({
  title,
  subtitle,
  bibleVerse,
  children,
  removeBottom,
  id,
}) => {
  return (
    <div
      id={id}
      className={`bg-white flex justify-center ${
        removeBottom ? "pt-24" : "py-24"
      }`}
    >
      <div className="container flex flex-col justify-center items-center">
        <Fade
          cascade
          duration={400}
          direction="up"
          className="flex justify-center w-full"
          triggerOnce
        >
          <div className="text-4xl mb-10">{title}</div>
          <div className="text-base sm:text-lg sm:w-4/5 justify-center text-center mb-3">
            {subtitle}
          </div>
          <div className="text-rs-primary text-base sm:text-lg">
            {bibleVerse}
          </div>
        </Fade>
        <div className="mt-24 w-full">{children}</div>
      </div>
    </div>
  );
};

export { Section };
