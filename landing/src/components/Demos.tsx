import { useState, type CSSProperties } from "react";
import { useLocale } from "../i18n/locale";
import type { Translation } from "../i18n/translations";
import { Icon } from "./Icon";

export function AlertsDemo() {
  const { t } = useLocale();
  const [level, setLevel] = useState(2);

  return (
    <div className="panel alerts-demo">
      <div className="alerts-control">
        <span className="panel-label">{t.alerts.sensitivity}</span>
        <div className="segmented" role="radiogroup" aria-label={t.alerts.sensitivity}>
          {t.alerts.levels.map((label, index) => (
            <button key={label} type="button" role="radio" aria-checked={level === index + 1} className={level === index + 1 ? "active" : ""} onClick={() => setLevel(index + 1)}>
              {label}
            </button>
          ))}
        </div>
      </div>
      <ul className="inbox">
        {t.alerts.messages.map((message) => {
          const flagged = message.level > 0 && message.level <= level;
          return (
            <li key={message.name} className={flagged ? "flagged" : ""}>
              <span className="avatar">{message.name[0]}</span>
              <span className="inbox-text">
                <strong>{message.name}</strong>
                <span>{message.text}</span>
              </span>
              <span className="inbox-badge">{flagged ? t.alerts.flagged : t.alerts.quiet}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const hours = [9, 10, 11, 12, 13, 14, 15, 16];
const busy = [
  { day: 0, start: 9.5, length: 1 },
  { day: 1, start: 11, length: 1 },
  { day: 3, start: 10, length: 1.5 },
  { day: 2, start: 12.5, length: 1 },
  { day: 3, start: 15, length: 1 },
  { day: 4, start: 9.5, length: 1 },
];

const slot = (day: number, start: number, length: number) => ({
  "--day": day,
  insetInlineStart: `calc(var(--hour-width) + (${day} - var(--first-day)) * (100% - var(--hour-width)) / var(--days) + 2px)`,
  top: `calc(${(start - 9) / hours.length} * 100% + 1px)`,
  height: `calc(${length / hours.length} * 100% - 3px)`,
}) as CSSProperties;

export function CalendarDemo() {
  const { t } = useLocale();

  return (
    <div className="panel calendar-demo">
      <p className="calendar-ask">{t.meetings.ask}</p>
      <div className="calendar">
        <span />
        {t.meetings.days.map((day, index) => (
          <span key={day} className={`calendar-day ${index === 3 ? "active" : ""}`} data-day={index}>
            {day}
          </span>
        ))}
        <div className="calendar-body">
          {hours.map((hour) => (
            <span key={hour} className="calendar-hour">
              <bdi dir="ltr">{hour}:00</bdi>
            </span>
          ))}
          {busy.map((event, index) => (
            <span key={index} className="calendar-event" data-day={event.day} style={slot(event.day, event.start, event.length)}>
              {t.meetings.busy[index]}
            </span>
          ))}
          <span className="calendar-event booked" style={slot(3, 14, 0.5)}>
            {t.meetings.booked}
          </span>
        </div>
      </div>
      <span className="calendar-sent">
        <Icon name="check" strokeWidth={2.4} />
        {t.meetings.sent}
      </span>
    </div>
  );
}

type ChatItem = Translation["modes"]["watch"]["features"][number]["chat"][number];

function ChatLine({ item }: { item: ChatItem }) {
  if (item.kind === "time") return <span className="demo-time">{item.text}</span>;
  if (item.kind === "me")
    return (
      <span className="bubble me" dir="auto">
        {item.text}
      </span>
    );
  if (item.kind === "voice")
    return (
      <span className="bubble me demo-voice">
        <Icon name="mic" strokeWidth={2} />
        <span className="demo-wave" aria-hidden="true" />
        <bdi dir="ltr">{item.text}</bdi>
      </span>
    );
  return (
    <span className="bubble ecqqo" dir="auto">
      {item.text}
      {item.footer && <small className="demo-footer">— {item.footer}</small>}
    </span>
  );
}

export function ChatDemo({ chat }: { chat: ChatItem[] }) {
  return (
    <div className="panel chat-demo">
      {chat.map((item, index) => (
        <span key={index} className="chat-demo-line" style={{ animationDelay: `${index * 0.9}s` }}>
          <ChatLine item={item} />
        </span>
      ))}
    </div>
  );
}

export function BriefingDemo() {
  const { t } = useLocale();
  const { briefing } = t;

  return (
    <div className="briefing-demo">
      <div className="briefing-page">
        <header>
          <img src="/logos/logo-icon-light.png" alt="" />
          <div>
            <strong>{briefing.title}</strong>
            <span>
              {briefing.periodLabel} · <bdi dir="ltr">{briefing.period}</bdi>
            </span>
          </div>
        </header>
        <section className="briefing-section tone-0">
          <h4>{briefing.summaryHeading}</h4>
          <p>{briefing.summary}</p>
        </section>
        {briefing.sections.map((section, index) => (
          <section key={section.heading} className={`briefing-section tone-${index + 1}`}>
            <h4>{section.heading}</h4>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="briefing-file">
        <span className="briefing-file-icon">PDF</span>
        <bdi dir="ltr">{briefing.file}</bdi>
      </div>
    </div>
  );
}
