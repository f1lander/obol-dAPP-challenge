/* eslint-disable react/function-component-definition -- t*/
import React from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "metadata"
  | "subline";

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
}

const typographyStyles: Record<TypographyVariant, string> = {
  h1: "text-4xl font-bold leading-snug", // Replace with Tailwind classes for H1
  h2: "text-3xl font-bold leading-relaxed", // Replace with Tailwind classes for H2
  h3: "text-2xl font-bold leading-normal", // Replace with Tailwind classes for H3
  h4: "text-xl font-bold leading-tight", // Replace with Tailwind classes for H4
  h5: "text-lg font-bold leading-snug", // Replace with Tailwind classes for H5
  body: "text-base font-medium leading-normal", // Replace with Tailwind classes for Body
  metadata: "text-sm font-medium leading-tight", // Replace with Tailwind classes for Metadata
  subline: "text-sm font-bold leading-tight uppercase tracking-wide", // Replace with Tailwind classes for Subline
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
}) => {
  const combinedClassName = `${typographyStyles[variant]} ${className || ""}`;

  switch (variant) {
    case "h1":
      return <h1 className={combinedClassName}>{children}</h1>;
    case "h2":
      return <h2 className={combinedClassName}>{children}</h2>;
    case "h3":
      return <h3 className={combinedClassName}>{children}</h3>;
    case "h4":
      return <h4 className={combinedClassName}>{children}</h4>;
    case "h5":
      return <h5 className={combinedClassName}>{children}</h5>;
    case "subline":
      return <span className={combinedClassName}>{children}</span>;
    case "metadata":
      return <small className={combinedClassName}>{children}</small>;
    default:
      return <p className={combinedClassName}>{children}</p>;
  }
};

export default Typography;
