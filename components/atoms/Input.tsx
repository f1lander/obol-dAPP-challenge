import { ChangeEvent } from "react";

type Props = {
  value: string;
  className?: string;
  onChange: (value: string) => void;
};

export const Input = ({ className = "", value, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <input
      className={`bg-gray-600 border-gray-900 border-2 rounded px-3 py-4 text-gray-100 font-bold text-base ${
        className ? className : ""
      }`}
      value={value}
      onChange={handleChange}
    />
  );
};
