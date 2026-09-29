const paths = {
  bell: "M18 9a6 6 0 10-12 0c0 6-2.5 8-2.5 8h17S18 15 18 9zM10 20.5a2.2 2.2 0 004 0",
  report: "M14 3H6v18h12V7l-4-4zM14 3v4h4M9 12h6M9 16h4",
  mic: "M12 3a3 3 0 00-3 3v6a3 3 0 006 0V6a3 3 0 00-3-3zM6 11a6 6 0 0012 0M12 17v4",
  settings: "M4 7h10M18 7h2M4 17h4M12 17h8M14 4.5v5M8 14.5v5",
  sun: "M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
  chart: "M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6",
  alarm: "M12 21a8 8 0 100-16 8 8 0 000 16zM12 9v4l2 2M5 3L2 6M19 3l3 3",
  tasks: "M4 6l1.5 1.5L8 5M4 12l1.5 1.5L8 11M4 18l1.5 1.5L8 17M11 6h9M11 12h9M11 18h9",
  check: "M5 12.5l4.5 4.5L19 7",
  search: "M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-4-4",
};

export type IconName = keyof typeof paths;

export function Icon({ name, strokeWidth = 1.8 }: { name: IconName; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
