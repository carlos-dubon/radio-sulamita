import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";

interface Props {
  href: string;
  icon: IconProp;
  className?: string;
}

export const IconLink: FC<Props> = ({ href, icon, className }) => {
  return (
    <Link href={href}>
      <a target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={icon}
          className={`transition-all ease-in-out duration-300 w-4 text-white hover:text-rs-primary ${className}`}
        />
      </a>
    </Link>
  );
};
