export function Ticks({ label }: { label?: string }) {
  return (
    <svg className="ticks" viewBox="0 0 16 11" fill="currentColor" role={label ? "img" : undefined} aria-label={label} aria-hidden={!label}>
      <path d="M11.07.65 4.5 7.85 1.93 5.33.9 6.38l3.6 3.5 7.6-8.2zM15.1.65 8.53 7.85l-.9-.88-1.03 1.05 1.93 1.86L16.13 1.7z" />
    </svg>
  );
}

export function Check() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10.5 8 14.5 16 5.5" />
    </svg>
  );
}

export function Plus() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Mic() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </svg>
  );
}
