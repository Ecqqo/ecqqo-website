import type { ReactNode } from "react";

const art = {
  modes: (
    <>
      <path d="M12 24h38l-9-9" />
      <path className="accent" d="M52 40H14l9 9" />
    </>
  ),
  dashboard: (
    <>
      <rect x="7" y="10" width="50" height="42" rx="7" />
      <path d="M7 20h50M37 29h13M37 36h13M37 43h8" />
      <rect className="accent" x="14" y="27" width="16" height="17" rx="3" />
    </>
  ),
  privacy: (
    <>
      <path d="M32 7 12 14.5v15C12 42.5 20.6 52 32 56c11.4-4 20-13.5 20-26.5v-15z" />
      <path className="accent" d="m23 31.5 6.5 6.5L42 25.5" />
    </>
  ),
  time: (
    <>
      <circle cx="32" cy="35" r="20" />
      <path d="M26 8h12M32 8v7" />
      <path className="accent" d="M32 35V24M32 35l7 5" />
    </>
  ),
  plan: (
    <>
      <path d="M32 9 8 21l24 12 24-12z" />
      <path d="m8 31.5 24 12 24-12" />
      <path className="accent" d="m8 42 24 12 24-12" />
    </>
  ),
  questions: (
    <>
      <path d="M10 13h44v29H31l-11 9v-9H10z" />
      <path className="accent" d="M20 24.5h24M20 31.5h15" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export function SectionIcon({ name }: { name: keyof typeof art }) {
  return (
    <span className="section-icon">
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {art[name]}
      </svg>
    </span>
  );
}
