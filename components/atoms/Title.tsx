import { PropsWithChildren } from "react";

export const Title = ({ children }: PropsWithChildren) => (
  <h1 className="font-bold text-3xl text-gray-100">{children}</h1>
);
