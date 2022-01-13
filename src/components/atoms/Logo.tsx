import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

export const Logo: FC = () => {
  return (
    <Link href="/">
      <a className="h-full">
        <Image src="/logo.svg" alt="logo" width={193} height={42} />
      </a>
    </Link>
  );
};
