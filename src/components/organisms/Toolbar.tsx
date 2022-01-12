import Image from "next/image";
import { FC } from "react";
import {ToolbarButton} from "@lib/atoms"

export const Toolbar: FC = () => {
  return (
    <div className="flex flex-col drop-shadow-2xl">
      <div className="h-16 flex items-center justify-center bg-rs-secondary">
        <div className="container">
          <div className="text-rs-primary">Siguiente aniversario:</div>
        </div>
      </div>
      <div className="h-20 flex justify-center bg-white">
        <div className="container flex items-center h-full justify-between">
          <Image src="/logo.svg" alt="logo" width={285} height={65.96} />
          <div>
             <ToolbarButton>
               Escuchar
             </ToolbarButton>
          </div>
        </div>
      </div>
    </div>
  );
};
