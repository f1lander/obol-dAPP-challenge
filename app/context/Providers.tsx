"use client";

import { ReactNode } from "react";
import { SearchProvider } from "./SearchProvider";

export function Providers({ children }: { children: ReactNode }) {
  return <SearchProvider>{children}</SearchProvider>;
}
