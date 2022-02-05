import { FC, ReactNode } from "react";

interface ColumnProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

const Column: FC<ColumnProps> = ({ title, children, className }) => {
  return (
    <div className="flex flex-col p-6 md:p-10 lg:p-16">
      <div className="text-lg mb-8 font-light">{title}</div>
      <div className={className}>{children}</div>
    </div>
  );
};

export { Column };
