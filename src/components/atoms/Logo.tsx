import { FC } from "react";
import Image from "next/image";

interface Props {
  white?: boolean;
}

export const Logo: FC<Props> = ({ white }) => {
  const logoSrc: string = white ? "/logo-white.svg" : "/logo.svg";
  return <Image src={logoSrc} alt="logo" width={193} height={44} priority />;
};
