import { ChangeEventHandler, FC, FocusEventHandler } from "react";

interface Props {
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[];
  name?: string;
  className?: string;
}

const Input: FC<Props> = ({
  placeholder,
  onChange,
  value,
  name,
  onBlur,
  className,
}) => {
  return (
    <input
      className={`h-[52px] w-full outline-none text-sm italic px-8 border-b-[3px] transition-all duration-700 border-b-white focus:border-b-rs-primary ${className}`}
      placeholder={placeholder}
      type="text"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
    />
  );
};

export { Input };
