import { PropsWithChildren } from "react";

export const Subtitle = ({ children }: PropsWithChildren) => (
  <h1 className="font-bold text-3xl text-gray-700">{children}</h1>
);
