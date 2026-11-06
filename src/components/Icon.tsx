const paths = {
  mic: "M12 3a3 3 0 00-3 3v6a3 3 0 006 0V6a3 3 0 00-3-3zM6 11a6 6 0 0012 0M12 17v4",
  check: "M5 12.5l4.5 4.5L19 7",
  ticks: "M1.5 12.5l4.5 4.5L14 8.5M10 17l8.5-8.5",
  search: "M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-4-4",
  close: "M6 6l12 12M18 6L6 18",
  userCheck: "M15 20v-1.5a4 4 0 00-4-4H6a4 4 0 00-4 4V20M8.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM16 11l2 2 4-4",
  adOff: "M3 10.5v3l2 .6M9 15.7l9 2.8V5.5L8.4 8.5M11.5 16.5a3 3 0 01-5.6-1.6M3 3l18 18",
  botOff: "M12 7V4H9M7 10h10a2 2 0 012 2v5M17.5 20H7a2 2 0 01-2-2v-6a2 2 0 011-1.7M9 15h.01M3 3l18 18",
  lock: "M7 11h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2zM8 11V7a4 4 0 018 0v4",
  eyeOff: "M10.6 5.1A10 10 0 0112 5c6.5 0 10 7 10 7a17 17 0 01-2.4 3.3M6.6 6.6C3.7 8.5 2 12 2 12s3.5 7 10 7a9.7 9.7 0 005.4-1.6M9.9 9.9a3 3 0 004.2 4.2M3 3l18 18",
  trash: "M4 7h16M9 7V4.5h6V7M6.5 7l1 13h9l1-13M10 11v5M14 11v5",
};

type IconName = keyof typeof paths;

export function Icon({ name, strokeWidth = 1.8 }: { name: IconName; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
