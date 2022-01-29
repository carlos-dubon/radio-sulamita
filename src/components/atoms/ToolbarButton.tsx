import { FC, ReactNode } from "react";
import { Scrollchor, swing } from "react-scrollchor";

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
  scrollTo?: string;
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
  scrollTo,
}) => {
  const classStr: string = `
  transition-all duration-500 ease-in-out
  h-20 ${primary ? "w-40" : "px-6"}
  flex justify-center items-center
  font-medium text-sm cursor-pointer
  ${backgroundColor ? backgroundColor : "bg-white"}
  ${textColor ? textColor : "text-black"}
  ${hoverBackgroundColor ? hoverBackgroundColor : "hover:bg-rs-primary"}
  ${hoverTextColor ? hoverTextColor : " hover:text-white"}
  ${className}
  `;

  return (
    <>
      {scrollTo ? (
        <Scrollchor to={scrollTo} animate={{ duration: 50, easing: swing }}>
          <div title={title} className={classStr}>
            {children}
          </div>
        </Scrollchor>
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
