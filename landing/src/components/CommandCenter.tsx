import { useRef } from "react";
import { useLocale } from "../i18n/locale";
import type { Translation } from "../i18n/translations";
import { Icon, type IconName } from "./Icon";

type Copy = Translation["commandCenter"];
type Task = Copy["tasks"][number];

const navIcons: IconName[] = ["sun", "chart", "report", "bell", "alarm", "tasks", "settings"];
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
          <span key={filter} className="app-filter">
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
  let offset = 0;

  return (
    <>
      <header className="app-header">
        <h4>{copy.nav[1]}</h4>
        <span className="app-filter">{copy.range}</span>
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
              <span className="dot teal" />
              {copy.legend[0]}
              <span className="dot orange" />
              {copy.legend[1]}
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
        <div className="app-card app-donut">
          <strong>{copy.byArea}</strong>
          <div className="donut-row">
            <svg viewBox="0 0 42 42" aria-hidden="true">
              {areaShares.map((share, index) => {
                const segment = (
                  <circle key={index} cx="21" cy="21" r="15.9" pathLength="100" className={`slice s${index}`} strokeDasharray={`${share - 2} ${102 - share}`} strokeDashoffset={-offset} />
                );
                offset += share;
                return segment;
              })}
            </svg>
            <ul>
              {copy.areas.map((area, index) => (
                <li key={area}>
                  <span className={`dot s${index}`} />
                  {area}
                  <bdi dir="ltr">{areaShares[index]}%</bdi>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

const views = { tasks: { nav: 5, View: TasksView }, activity: { nav: 1, View: ActivityView } };

export type PreviewView = keyof typeof views;

function AppPreview({ view }: { view: PreviewView }) {
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
        <aside className="app-sidebar">
          <span className="app-brand">
            <img src="/logos/logo-icon-light.png" alt="" />
            Ecqqo
            <span className="app-plan">{copy.plan}</span>
          </span>
          <nav>
            {copy.nav.map((label, index) => (
              <span key={label} className={nav === index ? "active" : ""}>
                <Icon name={navIcons[index]} />
                {label}
              </span>
            ))}
          </nav>
          <span className="app-user">
            <span className="avatar">AM</span>
            <span>
              <strong>{copy.user}</strong>
              <span>{copy.plan}</span>
            </span>
          </span>
        </aside>
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
              ×
            </button>
          </header>
          <AppPreview view={view} />
        </div>
      </dialog>
    </>
  );
}
