import React from "react";

// Define a type for the Button props
interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "disabled";
  isLoading?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  onClick?: () => void | Promise<void>;
}

export function Button({
  children,
  variant,
  isLoading,
  ref,
  ...props
}: ButtonProps): JSX.Element {
  // Determine the button color based on the 'variant' prop
  const colorClasses: { [key in ButtonProps["variant"]]?: string } = {
    primary: "bg-[#2FE4AB]  hover:bg-viridian ",
    secondary: "bg-dark-turquoise hover:bg-[#85E3EA]",
    disabled: "bg-muted text-white",
  };

  const commonClasses =
    "px-6 py-2 rounded-lg text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-1 focus:ring-white text-[#091011] hover:text-[#045062]";

  const loadingClasses = isLoading ? "cursor-not-allowed opacity-50" : "";

  return (
    <button
      ref={ref}
      className={`${commonClasses} ${colorClasses[variant]} ${loadingClasses}`}
      disabled={isLoading}
      type="button"
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
