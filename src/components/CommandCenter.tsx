import { useRef } from "react";
import { useLocale } from "../i18n/locale";
import type { Translation } from "../i18n/translations";
import { ContactAvatar } from "./ContactAvatar";
import { Icon } from "./Icon";

type Copy = Translation["commandCenter"];
type Task = Copy["tasks"][number];

const actions = [3, 5, 4, 7, 6, 2, 1, 8, 10, 9, 7, 12, 11, 14];
const alerts = [0, 1, 0, 2, 1, 0, 0, 1, 2, 1, 0, 3, 1, 2];
const areaShares = [42, 24, 18, 16];

function smoothPath(values: number[], max: number) {
  const points = values.map((value, index) => [(index / (values.length - 1)) * 100, 40 - (value / max) * 36] as const);
  return points.reduce((path, [x, y], index) => {
    if (index === 0) return `M ${x} ${y}`;
    const [px, py] = points[index - 1];
    const mid = (px + x) / 2;
    return `${path} C ${mid} ${py}, ${mid} ${y}, ${x} ${y}`;
  }, "");
}

function TaskStatus({ status }: { status: string }) {
  if (status === "done")
    return (
      <span className="task-status done">
        <Icon name="check" strokeWidth={3} />
      </span>
    );
  return <span className={`task-status ${status}`} />;
}

function Priority({ level }: { level: number }) {
  return (
    <span className={`priority p${level}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function TaskRow({ task, detail }: { task: Task; detail: boolean }) {
  return (
    <li className="task-row">
      <TaskStatus status={task.status} />
      <Priority level={task.priority} />
      <span className="task-text">
        <strong>{task.title}</strong>
        {detail && <span>{task.detail}</span>}
      </span>
      <span className={`task-due ${task.late ? "late" : ""}`}>{task.due}</span>
    </li>
  );
}

function TasksView({ copy }: { copy: Copy }) {
  return (
    <>
      <header className="app-header">
        <h4>{copy.tasksHeading}</h4>
      </header>
      <div className="app-filters">
        <span className="app-search">
          <Icon name="search" />
          {copy.search}
        </span>
        {copy.filters.map((filter) => (
          <span key={filter} className="app-chip">
            {filter}
          </span>
        ))}
      </div>
      <ul className="app-card task-list">
        {copy.tasks.map((task) => (
          <TaskRow key={task.title} task={task} detail />
        ))}
      </ul>
    </>
  );
}

function ActivityView({ copy }: { copy: Copy }) {
  const max = Math.max(...actions);
  const actionsPath = smoothPath(actions, max);

  return (
    <>
      <header className="app-header">
        <h4>{copy.nav[1]}</h4>
        <span className="app-chip">{copy.range}</span>
      </header>
      <div className="app-stats">
        {copy.stats.map((stat) => (
          <div key={stat.label} className="app-card app-stat">
            <span>{stat.label}</span>
            <strong>
              <bdi dir="ltr">{stat.value}</bdi>
            </strong>
          </div>
        ))}
      </div>
      <div className="app-charts">
        <div className="app-card app-chart">
          <div className="app-chart-head">
            <strong>{copy.chart}</strong>
            <span className="app-legend">
              <span>
                <span className="dot teal" />
                {copy.legend[0]}
              </span>
              <span>
                <span className="dot orange" />
                {copy.legend[1]}
              </span>
            </span>
          </div>
          <svg viewBox="0 0 100 42" preserveAspectRatio="none" aria-hidden="true">
            {[4, 13, 22, 31, 40].map((y) => (
              <line key={y} x1="0" x2="100" y1={y} y2={y} className="grid" />
            ))}
            <path d={`${actionsPath} L 100 42 L 0 42 Z`} className="area" />
            <path d={actionsPath} className="line teal" />
            <path d={smoothPath(alerts, max)} className="line orange" />
          </svg>
        </div>
        <div className="app-card app-areas">
          <strong>{copy.byArea}</strong>
          <ul>
            {copy.areas.map((area, index) => (
              <li key={area}>
                <span>
                  {area}
                  <bdi dir="ltr">{areaShares[index]}%</bdi>
                </span>
                <span className="app-track">
                  <span className={`a${index}`} style={{ width: `${areaShares[index]}%` }} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function TodayView({ copy }: { copy: Copy }) {
  const { t } = useLocale();
  const alerts = t.alerts.messages.filter((message) => message.level > 0).slice(0, 2);

  return (
    <>
      <header className="app-header">
        <div>
          <h4>{copy.greeting}</h4>
          <span>{copy.date}</span>
        </div>
      </header>
      <div className="app-today">
        <div className="app-card app-brief">
          <img src="/desk.jpg" alt="" />
          <div>
            <div className="app-card-head">
              <strong>{copy.brief.heading}</strong>
              <span>{copy.brief.time}</span>
            </div>
            <p>{copy.brief.intro}</p>
            <ul>
              {copy.brief.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="app-card app-side">
          <div className="app-card-head">
            <strong>{copy.tasksHeading}</strong>
          </div>
          <ul className="task-list">
            {copy.tasks.slice(0, 2).map((task) => (
              <TaskRow key={task.title} task={task} detail={false} />
            ))}
          </ul>
        </div>
        <div className="app-card app-side">
          <div className="app-card-head">
            <strong>{copy.nav[3]}</strong>
          </div>
          <ul className="app-alerts">
            {alerts.map((message) => (
              <li key={message.name}>
                <ContactAvatar name={message.avatar} />
                <span>
                  {message.text}
                  <small>{message.name}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

const views = {
  today: { nav: 0, View: TodayView },
  tasks: { nav: 5, View: TasksView },
  activity: { nav: 1, View: ActivityView },
};

export type PreviewView = keyof typeof views;

export function AppPreview({ view }: { view: PreviewView }) {
  const { t } = useLocale();
  const copy = t.commandCenter;
  const { nav, View } = views[view];

  return (
    <div className="browser">
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <span className="browser-url">app.ecqqo.com</span>
      </div>
      <div className="app">
        <header className="app-topbar">
          <span className="app-brand">
            <img src="/logos/ecqqo-mark.png" alt="" />
            ecqqo
          </span>
          <nav>
            {copy.nav.map((label, index) => (
              <span key={label} className={nav === index ? "active" : ""}>
                {label}
              </span>
            ))}
          </nav>
          <span className="app-user">
            <span className="avatar">AM</span>
            {copy.plan}
          </span>
        </header>
        <div className="app-main">
          <View copy={copy} />
        </div>
      </div>
    </div>
  );
}

export function FeaturePreview({ view, label }: { view: PreviewView; label: string }) {
  const { t } = useLocale();
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button type="button" className="info-button" aria-label={t.pricing.preview} title={t.pricing.preview} onClick={() => dialog.current?.showModal()}>
        i
      </button>
      <dialog ref={dialog} className="preview" aria-label={label} onClick={(event) => event.target === dialog.current && dialog.current.close()}>
        <div className="preview-inner">
          <header>
            <strong>{label}</strong>
            <button type="button" className="icon-button" aria-label={t.pricing.close} onClick={() => dialog.current?.close()}>
              <Icon name="close" />
            </button>
          </header>
          <AppPreview view={view} />
        </div>
      </dialog>
    </>
  );
}
