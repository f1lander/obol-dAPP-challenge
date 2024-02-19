export type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="border-divider flex w-full items-center justify-between  border-b-4 py-8">
      <div className="mx-auto">{children}</div>
    </header>
  );
};

export default Header;
