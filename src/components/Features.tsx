import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLocale } from "../i18n/locale";
import type { Translation } from "../i18n/translations";
import { Ticks } from "./Icon";

const modes = ["watch", "work"] as const;

type Selection = [(typeof modes)[number], number];
type ChatItem = Translation["modes"]["watch"]["features"][number]["chat"][number];
type AlertIcon = Translation["alerts"]["messages"][number]["icon"];

const alertIcons: Record<AlertIcon, ReactNode> = {
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  sign: (
    <>
      <path d="M4 20h4L19 9l-4-4L4 16z" />
      <path d="M13 7l4 4" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M9 13h6M9 17h6" />
    </>
  ),
  coffee: (
    <>
      <path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z" />
      <path d="M16 11h2a2 2 0 0 1 0 4h-2M8 3v3M11 3v3" />
    </>
  ),
  bill: (
    <>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" />
      <path d="M9 8h6M9 12h6" />
    </>
  ),
};

const wave = [6, 10, 16, 8, 20, 12, 18, 7, 14, 22, 10, 16, 6, 12, 18, 9, 14, 8, 11, 6, 9, 5];

function AlertsCard() {
  const { t } = useLocale();
  const [level, setLevel] = useState(2);

  return (
    <div className="alerts-card">
      <div className="sens">
        <span id="sensitivity">{t.alerts.sensitivity}</span>
        <div className="seg" role="radiogroup" aria-labelledby="sensitivity">
          {t.alerts.levels.map((label, index) => (
            <button key={label} type="button" role="radio" aria-checked={level === index + 1} onClick={() => setLevel(index + 1)}>
              {label}
            </button>
          ))}
        </div>
      </div>
      <ul>
        {t.alerts.messages.map((message) => {
          const flagged = message.level > 0 && message.level <= level;
          return (
            <li key={message.name} className="row">
              <span className={`why ${flagged ? "hot" : ""}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {alertIcons[message.icon]}
                </svg>
              </span>
              <span>
                <b>{message.name}</b>
                <span>{message.text}</span>
              </span>
              <span className={`tag ${flagged ? "sent" : ""}`}>{flagged ? t.alerts.flagged : t.alerts.quiet}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Bubble({ item }: { item: ChatItem }) {
  const time = (
    <span className="t">
      {item.time}
      {(item.kind === "me" || item.kind === "voice") && <Ticks />}
    </span>
  );
  if (item.kind === "voice")
    return (
      <div className="b out">
        <span className="vn">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
          <i>
            {wave.map((height, index) => (
              <b key={index} style={{ height }} />
            ))}
          </i>
          <small dir="ltr">{item.text}</small>
        </span>
        {time}
      </div>
    );
  if (item.kind === "doc")
    return (
      <div className="b in">
        <span className="doc">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M6 2.5h8l4.5 4.5v14.5H6z" />
            <path d="M14 2.5V7h4.5" />
          </svg>
          <span>
            <b>{item.text}</b>
            <small>{item.detail}</small>
          </span>
        </span>
        {time}
      </div>
    );
  return (
    <div className={`b ${item.kind === "me" ? "out" : "in"}`}>
      <span dir="auto">{item.text}</span>
      {time}
      {item.footer && <span className="foot">{item.footer}</span>}
    </div>
  );
}

export function Features() {
  const { t } = useLocale();
  const [selected, setSelected] = useState<Selection>(["watch", 0]);
  const row = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);
  const tabs = modes.flatMap((mode) => t.modes[mode].features.map((_, index): Selection => [mode, index]));
  const position = tabs.findIndex(([mode, index]) => mode === selected[0] && index === selected[1]);
  const feature = t.modes[selected[0]].features[selected[1]];

  useEffect(() => {
    const scroller = row.current!;
    const tab = scroller.querySelector<HTMLElement>("[aria-selected=true]")!;
    if (scroller.scrollWidth <= scroller.clientWidth) return;
    scroller.scrollTo({ left: tab.offsetLeft - (scroller.clientWidth - tab.offsetWidth) / 2, behavior: "smooth" });
  }, [selected]);

  function swipe(endX: number) {
    if (touchStart.current === null) return;
    const distance = endX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(distance) < 50) return;
    const forward = document.documentElement.dir === "rtl" ? distance > 0 : distance < 0;
    const next = tabs[position + (forward ? 1 : -1)];
    if (next) setSelected(next);
  }

  return (
    <div className="feat">
      <div className="side" ref={row}>
        {modes.map((mode) => (
          <div key={mode} className="side-group">
            <h3 id={`mode-${mode}`}>{t.modes[mode].tab}</h3>
            <div role="tablist" aria-labelledby={`mode-${mode}`}>
              {t.modes[mode].features.map((item, index) => {
                const active = selected[0] === mode && selected[1] === index;
                return (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    id={`tab-${mode}-${index}`}
                    aria-selected={active}
                    aria-controls="feature-panel"
                    onClick={() => setSelected([mode, index])}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div
        className="pane"
        id="feature-panel"
        role="tabpanel"
        aria-labelledby={`tab-${selected[0]}-${selected[1]}`}
        onTouchStart={(event) => (touchStart.current = event.touches[0].clientX)}
        onTouchEnd={(event) => swipe(event.changedTouches[0].clientX)}
      >
        <p>{feature.text}</p>
        <div className={`panel ${feature.chat.length ? "chat" : ""}`}>
          <img className="calm" src="/illustrations/phone-hand.webp" alt="" />
          {feature.chat.length ? (
            <div className="chatcard">
              {feature.chat.map((item, index) => (
                <Bubble key={`${feature.name}-${index}`} item={item} />
              ))}
            </div>
          ) : (
            <AlertsCard />
          )}
        </div>
      </div>
    </div>
  );
}
