import { FC } from "react";
import { Button } from "@lib/atoms";

interface Props {
  heading: string;
  subHeading?: string;
  buttonText: string;
  // buttonClick: () => void;
}

const SectionQuote: FC<Props> = ({ heading, subHeading }) => {
  return (
    <div className="bg-rs-secondary flex justify-center items-center w-full py-8">
      <div className="container flex justify-between">
        <div className="flex flex-col gap-1">
          <div className="text-xl text-white">{heading}</div>
          {subHeading ? (
            <div className="text-sm text-stone-200">{subHeading}</div>
          ) : null}
        </div>
        <Button text="Donar" onClick={() => {}} />
      </div>
    </div>
  );
};

export { SectionQuote };
