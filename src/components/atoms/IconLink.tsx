import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";

interface Props {
  href: string;
  icon: IconProp;
}

export const IconLink: FC<Props> = ({ href, icon }) => {
  return (
    <Link href={href}>
      <a target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={icon}

          className="transition-all ease-in-out duration-300 text-white hover:text-rs-primary w-4"
        />
      </a>
    </Link>
  );
};
