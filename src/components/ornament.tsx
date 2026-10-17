import type { ReactNode } from "react";

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-gold sm:w-14" />
      <span className="size-1.5 rotate-45 border border-gold" />
      <span className="h-px w-10 bg-gold sm:w-14" />
    </div>
  );
}

export function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-center font-serif text-sm font-medium tracking-widest text-ink-soft uppercase">
      {children}
    </p>
  );
}

const primary =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 bg-ink px-6 text-center font-serif text-base font-medium text-cream transition-colors hover:bg-ink-soft sm:w-auto";
const quiet =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 border border-ink/25 bg-transparent px-6 text-center font-serif text-base font-medium text-ink transition-colors hover:bg-cream-deep sm:w-auto";

export function PrimaryLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={primary}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function QuietLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={quiet}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function PrimaryButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button type="button" onClick={onClick} className={primary}>
      {children}
    </button>
  );
}

export function QuietButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button type="button" onClick={onClick} className={quiet}>
      {children}
    </button>
  );
}
