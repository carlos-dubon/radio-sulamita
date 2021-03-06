import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const WhatsAppFloatingIcon: FC = () => {
  return (
    <Link href="https://wa.link/logvtp">
      <a
        target="_blank"
        className="rounded-full shadow-2xl fixed left-8 bottom-8 z-20 cursor-pointer"
      >
        <Image
          src="/whatsapp.svg"
          alt="whatsapp"
          width={55}
          height={55}
          priority
        />
      </a>
    </Link>
  );
};

export { WhatsAppFloatingIcon };
