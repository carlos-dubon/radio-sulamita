import { ChangeEventHandler, FC } from "react";

interface Props {
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input: FC<Props> = ({ placeholder, onChange }) => {
  return (
    <input
      className="h-[52px] w-full outline-none text-xs merriweather italic px-8 border-b-[3px] transition-all duration-700 border-b-white focus:border-b-rs-primary"
      placeholder={placeholder}
      type="text"
      onChange={onChange}
    />
  );
};

export { Input };
