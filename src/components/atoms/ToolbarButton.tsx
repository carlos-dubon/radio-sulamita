import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ToolbarButton: FC<Props> = ({ children }) => {
  return (
    <div className="h-20 flex items-center px-6 bg-rs-primary text-white font-normal">{children}</div>
  );
};
