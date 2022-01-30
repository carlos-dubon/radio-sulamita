import { FC, ReactNode } from "react";
import Link from "next/link";

interface Props {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  primary?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
  href?: string;
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
  disabled,
  title,
  href,
}) => {
  const classStr: string = `
  transition-all duration-500 ease-in-out
  h-20 ${primary ? "w-40" : "px-6"}
  flex justify-center items-center
  text-xs uppercase tracking-wider cursor-pointer
  ${backgroundColor ? backgroundColor : "bg-white"}
  ${textColor ? textColor : "text-black"}
  ${hoverBackgroundColor ? hoverBackgroundColor : "hover:bg-rs-primary"}
  ${hoverTextColor ? hoverTextColor : " hover:text-white"}
  ${className}
  `;

  return (
    <>
      {href ? (
        <Link href={href}>
          <a className={classStr}>{children}</a>
        </Link>
      ) : (
        <div
          title={title}
          onClick={() => {
            if (onClick && !disabled) {
              onClick();
            }
          }}
          className={classStr}
        >
          {children}
        </div>
      )}
    </>
  );
};
