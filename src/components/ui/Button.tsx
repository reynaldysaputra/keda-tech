import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}