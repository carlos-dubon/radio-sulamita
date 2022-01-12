import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ToolbarButton: FC<Props> = ({ children }) => {
  return (
    <div className="cursor-pointer transition duration-500 ease-in-out h-20 w-40 flex justify-center items-center bg-rs-primary text-white font-medium text-sm hover:bg-black">
      {children}
    </div>
  );
};
