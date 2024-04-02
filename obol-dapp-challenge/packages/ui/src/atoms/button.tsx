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
    primary: "hover:bg-aquamarine text-[#081011] bg-viridian",
    secondary: "bg-dark-turquoise text-[##9CC2C9] hover:bg-flame",
    disabled: "bg-muted text-white",
  };

  const commonClasses =
    "px-6 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-1 focus:ring-white";

  // Apply 'disabled' classes if the button is in loading state
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
