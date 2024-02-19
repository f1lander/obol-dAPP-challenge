import Header from "./components/Header";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header>
        <Logo />
      </Header>
    </main>
  );
}
