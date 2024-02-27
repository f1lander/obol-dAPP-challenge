import { PokemonList } from "@/components/organisms/PokemonList";
import { NavBar } from "@/components/organisms/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/config";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <main className="flex min-h-screen flex-col font-sans">
          <NavBar />
          <PokemonList />
        </main>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
