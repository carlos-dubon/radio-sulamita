import { FC, ReactNode } from "react";

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
        <div className="text-4xl font-semibold mb-10">{title}</div>
        <div className="text-xl w-4/5 justify-center text-center mb-3">
          {subtitle}
        </div>
        <div className="text-rs-primary text-xl italic">{bibleVerse}</div>
        <div className="mt-24 w-full">{children}</div>
      </div>
    </div>
  );
};

export { Section };
