import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from "react";

interface Props {
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[];
  name?: string;
  type: HTMLInputTypeAttribute;
  className?: string;
}

const Input: FC<Props> = ({
  placeholder,
  onChange,
  value,
  name,
  onBlur,
  className,
  type,
}) => {
  return (
    <input
      className={`h-[52px] w-full outline-none text-xs px-8 border-b-[3px] transition-all duration-700 border-b-white focus:border-b-rs-primary ${className}`}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
    />
  );
};

export { Input };
