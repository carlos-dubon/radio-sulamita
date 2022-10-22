import { CSSProperties, FC } from "react";

interface Props {
  width?: string;
  borderWidth?: number;
}

const Spinner: FC<Props> = ({ width = "4rem", borderWidth = 3 }) => {
  const style = {
    "--spinner-width": width,
    "--spinner-border": `${borderWidth}px solid rgba(255, 255, 255, 0.35)`,
  } as CSSProperties;

  return <div className="spinner spinner1" style={style}></div>;
};

export { Spinner };
