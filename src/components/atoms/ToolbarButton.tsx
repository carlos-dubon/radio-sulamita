import classNames from "classnames";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  primary?: boolean;
  onClick?: () => any;
}

export const ToolbarButton: FC<Props> = ({
  children,
  backgroundColor,
  className,
  hoverBackgroundColor,
  textColor,
  hoverTextColor,
  primary,
  onClick,
}) => {
  const classStr = classNames(
    "transition-all duration-500 ease-in-out",
    `h-20 ${primary ? "w-40" : "px-6"}`,
    "flex justify-center items-center",
    " font-medium text-sm cursor-pointer",
    `${backgroundColor ? backgroundColor : "bg-white"}`,
    `${textColor ? textColor : "text-black"}`,
    `${hoverBackgroundColor ? hoverBackgroundColor : "hover:bg-rs-primary"}`,
    `${hoverTextColor ? hoverTextColor : " hover:text-white"}`,
    className
  );

  return (
    <div
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className={classStr}
    >
      {children}
    </div>
  );
};
