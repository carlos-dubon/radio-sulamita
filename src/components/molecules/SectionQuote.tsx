import { FC } from "react";
import { Button } from "@lib/atoms";
import { SectionRefs } from "@lib/templates";

interface Props {
  heading: string;
  subHeading?: string;
  buttonText: string;
  buttonClick?: () => void;
  secondary?: boolean;
  scrollTo?: SectionRefs;
}

const SectionQuote: FC<Props> = ({
  heading,
  subHeading,
  buttonText,
  buttonClick,
  secondary,
  scrollTo,
}) => {
  return (
    <div
      className={`${
        secondary ? "bg-rs-primary" : "bg-rs-secondary"
      } flex justify-center items-center w-full py-8`}
    >
      <div className="container flex justify-between md:items-center flex-col md:flex-row">
        <div className="flex flex-col gap-1 max-w-3xl mb-5 md:mb-0">
          <div className="text-lg md:text-xl text-white font-light">
            {heading}
          </div>
          {subHeading ? (
            <div className="text-sm text-stone-200 font-light">
              {subHeading}
            </div>
          ) : null}
        </div>
        <Button
          text={buttonText}
          onClick={() => {
            buttonClick && buttonClick();
          }}
          scrollTo={scrollTo}
          secondary={secondary}
        />
      </div>
    </div>
  );
};

export { SectionQuote };
