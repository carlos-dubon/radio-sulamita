import { FC, ReactNode } from "react";
import ReactCountdown, { CountdownRendererFn } from "react-countdown";

interface NumberProps {
  children: ReactNode;
}

const Number: FC<NumberProps> = ({ children }) => {
  return <div className="text-white">{children}</div>;
};

export const Countdown: FC = () => {
  const aniversary: Date = new Date(new Date().getFullYear(), 11, 18);

  const renderer: CountdownRendererFn = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    return (
      <div className="flex text-stone-400 gap-1">
        <Number>{days}</Number> días <Number>{hours}</Number> horas{" "}
        <Number>{minutes}</Number> minutos <Number>{seconds}</Number> segundos
      </div>
    );
  };

  return (
    <div className="text-rs-primary text-sm flex flex-col sm:flex-row gap-1 sm:gap-0">
      <div className="mr-5">Siguiente aniversario:</div>
      <ReactCountdown date={aniversary} renderer={renderer} />
    </div>
  );
};
