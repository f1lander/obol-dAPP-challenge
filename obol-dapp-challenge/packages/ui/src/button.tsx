import React from "react";

// Define a type for the Button props
interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "disabled"; // Add more variants as needed
  isLoading?: boolean;
  onClick?: () => void; // Add more event handlers as needed
}

export function Button({
  children,
  variant,
  isLoading,
  ...props
}: ButtonProps): JSX.Element {
  // Determine the button color based on the 'variant' prop
  const colorClasses: { [key in ButtonProps["variant"]]?: string } = {
    primary: "bg-aquamarine text-white hover:bg-viridian",
    secondary: "bg-dark-turquoise text-white hover:bg-flame",
    disabled: "bg-muted text-white",
  };

  const textColorClasses: { [key in ButtonProps["variant"]]?: string } = {
    primary: "text-[#081011]",
    secondary: "text-[#9CC2C9]",
    disabled: "text-gray-400",
  };

  const commonClasses =
    "px-6 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-1 focus:ring-white";

  // Apply 'disabled' classes if the button is in loading state
  const loadingClasses = isLoading ? "cursor-not-allowed opacity-50" : "";

  return (
    <button
      className={`${commonClasses} ${colorClasses[variant]} ${textColorClasses[variant]} ${loadingClasses}`}
      disabled={isLoading}
      type="button"
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
