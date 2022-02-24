import { FC, ReactNode } from "react";
import { Faded } from "baby-i-am-faded";

interface Props {
  title: string;
  subtitle: string;
  bibleVerse: string;
  children: ReactNode;
  removeBottom?: boolean;
}

const Section: FC<Props> = ({
  title,
  subtitle,
  bibleVerse,
  children,
  removeBottom,
}) => {
  return (
    <div
      className={`bg-white flex justify-center ${
        removeBottom ? "pt-24" : "py-24"
      }`}
    >
      <div className="container flex flex-col justify-center items-center">
        <Faded
          cascade
          whenInView
          className="flex flex-col justify-center items-center w-full"
          triggerOnce
        >
          <div className="text-4xl mb-10">{title}</div>
          <div className="text-base sm:text-lg sm:w-4/5 justify-center text-center mb-3">
            {subtitle}
          </div>
          <div className="text-rs-primary text-base sm:text-lg">
            {bibleVerse}
          </div>
        </Faded>
        <div className="mt-24 w-full">{children}</div>
      </div>
    </div>
  );
};

export { Section };
