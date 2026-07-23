import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="mx-auto w-full max-w-7xl px-5">
      {children}
    </div>
  );
}