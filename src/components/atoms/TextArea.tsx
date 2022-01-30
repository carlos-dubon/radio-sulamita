import { ChangeEventHandler, FC, FocusEventHandler } from "react";

interface Props {
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  name?: string;
  value?: string | number | readonly string[];
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  className?: string;
}

const TextArea: FC<Props> = ({
  placeholder,
  onChange,
  name,
  value,
  onBlur,
  className,
}) => {
  return (
    <textarea
      rows={10}
      className={`py-4 resize-none w-full outline-none text-sm italic px-8 border-b-[3px] transition-all duration-700 border-b-white focus:border-b-rs-primary ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      onBlur={onBlur}
    />
  );
};

export { TextArea };
