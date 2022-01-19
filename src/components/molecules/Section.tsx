import { FC, ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  bibleVerse: string;
  children: ReactNode;
}

const Section: FC<Props> = ({ title, subtitle, bibleVerse, children }) => {
  return (
    <div className="bg-white flex justify-center py-24">
      <div className="container flex flex-col justify-center items-center">
        <div className="text-4xl font-semibold mb-10">{title}</div>
        <div className="text-lg w-4/5 justify-center text-center mb-3">
          {subtitle}
        </div>
        <div className="text-rs-primary text-xl">{bibleVerse}</div>
        <div className="mt-24 w-full">{children}</div>
      </div>
    </div>
  );
};

export { Section };
