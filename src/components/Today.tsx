import type { ReactNode } from "react";
import { useLocale } from "../i18n/locale";
import { StatusBar } from "./HeroChat";
import "@fontsource-variable/plus-jakarta-sans";

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" {...stroke}>
      {children}
    </svg>
  );
}

const tabIcons = [
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
  </>,
  <path d="M3 3v16a2 2 0 0 0 2 2h16M18 17V9M13 17V5M8 17v-3" />,
  <path d="m3 17 2 2 4-4M3 7l2 2 4-4M13 6h8M13 12h8M13 18h8" />,
  <path d="M10.3 21a2 2 0 0 0 3.4 0M3.3 15.3A1 1 0 0 0 4 17h16a1 1 0 0 0 .7-1.7C19.4 14 18 12.5 18 8A6 6 0 0 0 6 8c0 4.5-1.4 6-2.7 7.3" />,
  <>
    <circle cx="5" cy="12" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
  </>,
];

const counts: Record<number, number> = { 0: 2, 5: 2 };

const spark = [22, 30, 18, 34, 28, 40, 24, 36, 44, 30, 46, 38, 52, 48];

function Sparkline() {
  const points = spark.map((value, index) => `${(index / (spark.length - 1)) * 100},${60 - value}`).join(" ");
  return (
    <svg className="today-spark" viewBox="0 0 100 60" preserveAspectRatio="none">
      <polygon points={`0,60 ${points} 100,60`} fill="currentColor" opacity="0.12" />
      <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function Today() {
  const { t } = useLocale();
  const { app } = t.showcase;
  const { today } = app;

  return (
    <div className="frame today-app" aria-hidden="true">
      <StatusBar />
      <div className="today-top">
        <span className="logo">
          <img src="/logos/ecqqo-mark.png" alt="" />
          {t.brandName}
        </span>
        <span className="today-pills">
          {today.nav.map((item, index) => (
            <span key={item} className={index === 0 ? "on" : ""}>
              {item}
              {counts[index] && <b>{counts[index]}</b>}
            </span>
          ))}
        </span>
        <span className="today-me">
          <Icon>
            <circle cx="12" cy="12" r="10" />
            <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01" />
          </Icon>
          <i>{app.initials}</i>
          <small>{t.pricing.plans[1].name}</small>
        </span>
      </div>

      <div className="today-main">
        <h3>{app.greeting}</h3>
        <p className="today-date">{app.date}</p>

        <div className="today-bento">
          <section className="today-tile today-brief">
            <div className="today-photo">
              <img src="/app/desk.webp" alt="" />
            </div>
            <div className="today-brief-body">
              <div className="today-head">
                <b>{today.brief.title}</b>
                <span>{today.brief.time}</span>
              </div>
              <div className="today-prose">
                <p>{today.brief.intro}</p>
                <ul>
                  {today.brief.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p>{today.brief.outro}</p>
              </div>
              <span className="today-link">{today.brief.link} ›</span>
            </div>
          </section>

          <section className="today-tile today-needs">
            <div className="today-head">
              <b>
                {today.tasks.title} <small>{today.tasks.items.length}</small>
              </b>
              <span>{today.tasks.all}</span>
            </div>
            <p className="today-group">{today.tasks.group}</p>
            {today.tasks.items.map((task) => (
              <div key={task.title} className="today-row">
                <i className="today-tick" />
                <span>
                  {task.title}
                  <small>{task.meta}</small>
                </span>
              </div>
            ))}
          </section>

          <section className="today-tile today-alerts">
            <div className="today-head">
              <b>
                {today.alerts.title} <small>{today.alerts.items.length}</small>
              </b>
              <span>{today.alerts.meta}</span>
            </div>
            {today.alerts.items.map((alert) => (
              <div key={alert.text} className="today-row">
                <i className="today-avatar">{alert.initials}</i>
                <span>
                  {alert.text}
                  <small>{alert.from}</small>
                </span>
              </div>
            ))}
          </section>

          <section className="today-tile today-time">
            <div className="today-head">
              <b>{today.saved.title}</b>
              <span>{today.saved.meta}</span>
            </div>
            <p className="today-num" dir="ltr">
              {today.saved.hours}
              <small>h</small> {today.saved.minutes}
              <small>m</small>
              <em>↑ 38%</em>
            </p>
            <Sparkline />
          </section>

          <section className="today-tile today-rem">
            <div className="today-head">
              <b>{today.reminders.title}</b>
              <span>{today.reminders.all}</span>
            </div>
            {today.reminders.items.map((reminder, index) => (
              <div key={reminder.text} className="today-row">
                <i className={`today-dot ${index === 0 ? "verm" : ""}`} />
                <span>{reminder.text}</span>
                <time>{reminder.time}</time>
              </div>
            ))}
          </section>
        </div>
      </div>

      <div className="today-tabs">
        {today.tabs.map((tab, index) => (
          <span key={tab} className={index === 0 ? "on" : ""}>
            <Icon>{tabIcons[index]}</Icon>
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
}
