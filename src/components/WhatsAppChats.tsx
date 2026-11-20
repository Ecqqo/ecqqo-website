import type { ReactNode } from "react";
import { useLocale } from "../i18n/locale";
import { StatusBar } from "./HeroChat";
import { Mic, Ticks } from "./Icon";

const line = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

function Glyph({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...line}>
      {children}
    </svg>
  );
}

const glyphs = {
  updates: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.8a9.2 9.2 0 1 1-7.4 14.7" strokeDasharray="4.2 2.4" />
      <path d="M4.2 16.4 3 21l4.6-1.3" />
    </>
  ),
  calls: (
    <path d="M21.5 16.4v2.9a1.9 1.9 0 0 1-2.1 1.9 18.8 18.8 0 0 1-8.2-2.9 18.5 18.5 0 0 1-5.7-5.7A18.8 18.8 0 0 1 2.6 4.4 1.9 1.9 0 0 1 4.5 2.3h2.9a1.9 1.9 0 0 1 1.9 1.6c.1.9.4 1.8.7 2.7a1.9 1.9 0 0 1-.4 2L8.4 9.8a15.2 15.2 0 0 0 5.7 5.7l1.2-1.2a1.9 1.9 0 0 1 2-.4c.9.3 1.8.6 2.7.7a1.9 1.9 0 0 1 1.6 1.9z" />
  ),
  communities: (
    <>
      <circle cx="12" cy="7.5" r="2.8" />
      <circle cx="5.2" cy="9.6" r="2.1" />
      <circle cx="18.8" cy="9.6" r="2.1" />
      <path d="M7 19.5v-.8a5 5 0 0 1 10 0v.8zM1.8 18.5a3.6 3.6 0 0 1 4.6-3.3M22.2 18.5a3.6 3.6 0 0 0-4.6-3.3" />
    </>
  ),
  chats: (
    <>
      <path
        d="M10 3.5c4.4 0 8 2.9 8 6.6s-3.6 6.6-8 6.6c-.9 0-1.8-.1-2.6-.4L3.6 18l1.1-3.3A6.3 6.3 0 0 1 2 10.1C2 6.4 5.6 3.5 10 3.5z"
        fill="currentColor"
      />
      <path d="M19.4 8.6A6 6 0 0 1 22 13.4c0 1.7-.8 3.3-2.1 4.4l.9 2.9-3.2-1.4c-.8.2-1.6.3-2.4.3-1.6 0-3.1-.4-4.3-1.2" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12.2 2h-.4a2 2 0 0 0-2 2v.2a2 2 0 0 1-1 1.7l-.4.3a2 2 0 0 1-2 0l-.2-.1a2 2 0 0 0-2.7.7l-.2.4a2 2 0 0 0 .7 2.7l.2.1a2 2 0 0 1 1 1.7v.5a2 2 0 0 1-1 1.7l-.2.1a2 2 0 0 0-.7 2.7l.2.4a2 2 0 0 0 2.7.7l.2-.1a2 2 0 0 1 2 0l.4.3a2 2 0 0 1 1 1.7v.2a2 2 0 0 0 2 2h.4a2 2 0 0 0 2-2v-.2a2 2 0 0 1 1-1.7l.4-.3a2 2 0 0 1 2 0l.2.1a2 2 0 0 0 2.7-.7l.2-.4a2 2 0 0 0-.7-2.7l-.2-.1a2 2 0 0 1-1-1.7v-.5a2 2 0 0 1 1-1.7l.2-.1a2 2 0 0 0 .7-2.7l-.2-.4a2 2 0 0 0-2.7-.7l-.2.1a2 2 0 0 1-2 0l-.4-.3a2 2 0 0 1-1-1.7V4a2 2 0 0 0-2-2z" />
    </>
  ),
  media: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="m3 16 5-5 5 5 3-3 5 5" />
      <circle cx="16" cy="9" r="1.5" />
    </>
  ),
  archive: <path d="M4 5h16v4H4zM5 9v10h14V9M10 13h4" />,
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.5-4.5" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  video: (
    <>
      <rect x="2" y="6" width="14" height="12" rx="3" />
      <path d="m16 11 6-4v10l-6-4" />
    </>
  ),
  emoji: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5a4.5 4.5 0 0 0 7 0M9 9.5h.01M15 9.5h.01" />
    </>
  ),
  photo: (
    <>
      <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
    </>
  ),
  poll: <path d="M5 20V10M12 20V4M19 20v-7" />,
  missed: <path d="M21.5 16.4v2.9a1.9 1.9 0 0 1-2.1 1.9 18.8 18.8 0 0 1-8.2-2.9 18.5 18.5 0 0 1-5.7-5.7A18.8 18.8 0 0 1 2.6 4.4 1.9 1.9 0 0 1 4.5 2.3h2.9a1.9 1.9 0 0 1 1.9 1.6c.1.9.4 1.8.7 2.7a1.9 1.9 0 0 1-.4 2L8.4 9.8a15.2 15.2 0 0 0 5.7 5.7l1.2-1.2a1.9 1.9 0 0 1 2-.4c.9.3 1.8.6 2.7.7a1.9 1.9 0 0 1 1.6 1.9zM15 3l6 6M21 3l-6 6" />,
  muted: (
    <>
      <path d="M3 9.5h3.5L11 5.5v13l-4.5-4H3z" fill="currentColor" />
      <path d="m15 9.5 5 5M20 9.5l-5 5" />
    </>
  ),
  pinned: <path d="M15.5 3.5 20.5 8.5l-2.8.9-3.4 3.4.5 4.1-1.4 1.4-4-4L4 19.7M9.6 8.4l3.4-3.4.9-2.8" fill="currentColor" />,
};

const senderColours = ["#c2185b", "#1f7aec", "#0a8a6b", "#e2731c"];

function Avatar({ name, group }: { name?: string; group?: boolean }) {
  if (name) return <img className="wa-pic" src={`/avatars/${name}.webp`} alt="" />;
  return (
    <svg className="wa-pic" viewBox="0 0 52 52">
      <circle cx="26" cy="26" r="26" fill="#dfe5e7" />
      <path
        fill="#fff"
        d={
          group
            ? "M19 25a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm14 0a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM8 38c0-6 5-10 11-10 3 0 5.5 1 7 2.5 1.5-1.5 4-2.5 7-2.5 6 0 11 4 11 10v2H8z"
            : "M26 27a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm-15 17c0-8 6.7-13 15-13s15 5 15 13z"
        }
      />
    </svg>
  );
}

export function WhatsAppChats() {
  const { t } = useLocale();
  const { wa, chats, initials } = t.showcase.app;
  const unreadChats = chats.filter((chat) => chat.unread && !chat.muted).length;
  const senders = [...new Set(wa.group.messages.map((message) => message.from))];

  return (
    <div className="frame wa-app" aria-hidden="true">
      <aside className="wa-side">
        <span className="wa-lights">
          <i />
          <i />
          <i />
        </span>
        {wa.sidebar.map((label, index) => (
          <span key={label} className={`wa-nav ${index === 0 ? "on" : ""}`}>
            <Glyph>{[glyphs.chats, glyphs.updates, glyphs.calls, glyphs.media][index]}</Glyph>
            {label}
            {index === 0 && <em>{unreadChats}</em>}
            {index === 1 && <i className="wa-dot" />}
            {index === 2 && <small>3</small>}
          </span>
        ))}
        <hr />
        {wa.more.map((label, index) => (
          <span key={label} className="wa-nav">
            <Glyph>{index === 0 ? glyphs.archive : glyphs.star}</Glyph>
            {label}
            {index === 0 && <small>6</small>}
          </span>
        ))}
        <span className="wa-nav wa-you">
          <b>{initials}</b>
          {wa.you}
        </span>
      </aside>

      <section className="wa-list">
        <StatusBar />
        <div className="wa-list-top">
          <span className="wa-round">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="6" cy="12" r="1.8" />
              <circle cx="12" cy="12" r="1.8" />
              <circle cx="18" cy="12" r="1.8" />
            </svg>
          </span>
          <b>{wa.title}</b>
          <span className="wa-top-actions">
            <span className="wa-round wa-camera">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.2 4h5.6l1.6 2.2H20a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.2a2 2 0 0 1 2-2h3.6zM12 17.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4zm0-1.8a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8z" fillRule="evenodd" />
              </svg>
            </span>
            <span className="wa-round green">
              <Glyph>{glyphs.plus}</Glyph>
            </span>
          </span>
        </div>
        <p className="wa-big-title">{wa.title}</p>
        <div className="wa-search">
          <Glyph>{glyphs.search}</Glyph>
          {wa.search}
        </div>
        <div className="wa-filters">
          {wa.filters.map((filter, index) => (
            <span key={filter} className={index === 0 ? "on" : ""}>
              {filter}
            </span>
          ))}
        </div>
        <div className="wa-archived">
          <Glyph>{glyphs.archive}</Glyph>
          <span>
            {wa.more[0]}
            <small>6</small>
          </span>
        </div>
        <div className="wa-rows">
          {chats.map((chat) => (
            <div key={chat.name} className={`wa-row ${chat.unread ? "unread" : ""} ${chat.muted ? "muted" : ""}`}>
              <Avatar name={chat.avatar} group={chat.group} />
              <span className="wa-row-main">
                <span className="wa-row-top">
                  <b>{chat.name}</b>
                  <time>{chat.time}</time>
                </span>
                <span className="wa-row-bottom">
                  <small className={chat.typing ? "typing" : ""}>
                    {chat.mine && <Ticks />}
                    {chat.sender && <>{chat.sender}: </>}
                    {chat.missed && <Glyph className="red">{glyphs.missed}</Glyph>}
                    {chat.media && (chat.media === "voice" ? <Mic /> : <Glyph>{glyphs[chat.media]}</Glyph>)}
                    {chat.text}
                  </small>
                  {chat.muted && <Glyph className="wa-flag">{glyphs.muted}</Glyph>}
                  {chat.pinned && <Glyph className="wa-flag">{glyphs.pinned}</Glyph>}
                  {chat.mention && <em className="at">@</em>}
                  {chat.unread > 0 && <em>{chat.unread}</em>}
                </span>
              </span>
            </div>
          ))}
        </div>
        <div className="wa-tabs">
          {wa.tabs.map((label, index) => (
            <span key={label} className={index === 3 ? "on" : ""}>
              <Glyph>{[glyphs.updates, glyphs.calls, glyphs.communities, glyphs.chats, glyphs.settings][index]}</Glyph>
              {label}
              {index === 0 && <i className="wa-dot" />}
              {index === 3 && <em>{unreadChats}</em>}
            </span>
          ))}
        </div>
      </section>

      <section className="wa-convo">
        <div className="wa-convo-head">
          <Avatar name="family" />
          <span>
            <b>{wa.group.name}</b>
            <small>{wa.group.members}</small>
          </span>
          <span className="wa-convo-actions">
            <Glyph>{glyphs.video}</Glyph>
            <Glyph>{glyphs.calls}</Glyph>
            <Glyph>{glyphs.search}</Glyph>
          </span>
        </div>
        <div className="wa-convo-body">
          <span className="wa-day">{wa.today}</span>
          {wa.group.messages.map((message, index) => (
            <div key={index} className={`b in ${message.kind === "photo" ? "photo" : ""}`}>
              <b style={{ color: senderColours[senders.indexOf(message.from) % senderColours.length] }}>{message.from}</b>
              {message.kind === "photo" && <img src="/app/beach.webp" alt="" />}
              {message.kind === "voice" ? (
                <span className="vn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <i>
                    {[6, 10, 16, 8, 20, 12, 18, 7, 14, 22, 10, 16, 6, 12, 18, 9].map((height, bar) => (
                      <b key={bar} style={{ height }} />
                    ))}
                  </i>
                  <small dir="ltr">{message.text}</small>
                </span>
              ) : (
                <span dir="auto">{message.text}</span>
              )}
              <span className="t">{message.time}</span>
            </div>
          ))}
        </div>
        <div className="wa-composer">
          <Glyph>{glyphs.plus}</Glyph>
          <span>
            <Glyph>{glyphs.emoji}</Glyph>
          </span>
          <Mic />
        </div>
      </section>
    </div>
  );
}
