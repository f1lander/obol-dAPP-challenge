import React from "react";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <input
      className="w-full px-4 py-2 bg-bg-2 border border-bg-4 text-white placeholder-gray-500 rounded-md focus:border-aquamarine focus:ring-0"
      {...props}
    />
  );
};

export default Input;
