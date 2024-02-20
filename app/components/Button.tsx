export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "primary" | "secondary";
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

const primaryClass =
  "bg-primary text-md text-textButtonPrimary hover:text-textButtonPrimaryHover hover:bg-primaryHover border-primary hover:border-primaryHover disabled:text-disabed disabled:border-disabed rounded border-2 border-solid px-4 py-2 font-bold disabled:bg-transparent";

const secondaryClass =
  "bg-transparent px-4 py-2 flex items-center  justify-center text-primary hover:text-primaryHover inline-block mx-auto disabled:text-disabled";

type AnchorOrButtonProps = Record<string, any> & {
  children: React.ReactNode;
  href?: string;
};

function AnchorOrButton({ children, href, ...props }: AnchorOrButtonProps) {
  if (href) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return <button {...props}>{children}</button>;
}

export default function Button({
  children,
  onClick,
  disabled = false,
  href,
  target,
  type = "primary",
}: ButtonProps) {
  return (
    <AnchorOrButton
      href={href}
      target={target}
      onClick={onClick}
      disabled={disabled}
      className={type === "primary" ? primaryClass : secondaryClass}
    >
      {children}
      {type === "secondary" && (
        <img className="ml-2" src="/arrow.svg" alt="arrow" />
      )}
    </AnchorOrButton>
  );
}
