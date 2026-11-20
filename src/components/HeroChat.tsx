import { Fragment, useEffect, useRef, useState } from "react";
import { useLocale } from "../i18n/locale";
import { Mic, Ticks } from "./Icon";

export function HeroChat() {
  const { t } = useLocale();
  const { chat } = t;
  const phone = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setInView(true);
      observer.disconnect();
    }, { threshold: 0.4 });
    observer.observe(phone.current!);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(chat.messages.length);
      return;
    }
    let count = 0;
    let timer = 0;
    const next = () => {
      if (count === chat.messages.length) {
        timer = window.setTimeout(() => {
          count = 0;
          setShown(0);
          next();
        }, 6000);
        return;
      }
      if (chat.messages[count].from === "me") {
        setShown(++count);
        timer = window.setTimeout(next, 2600);
        return;
      }
      setTyping(true);
      timer = window.setTimeout(() => {
        setTyping(false);
        setShown(++count);
        timer = window.setTimeout(next, 3600);
      }, 1400);
    };
    setShown(0);
    timer = window.setTimeout(next, 500);
    return () => {
      window.clearTimeout(timer);
      setTyping(false);
    };
  }, [chat, inView]);

  return (
    <div className="wa" ref={phone} aria-hidden="true">
      <div className="wa-screen">
        <StatusBar />
        <div className="wa-head">
          <svg className="wa-back" width="12" height="20" viewBox="0 0 12 20">
            <path d="M10 2 2 10l8 8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="wa-avatar">
            <img src="/logos/ecqqo-mark.png" alt="" />
          </span>
          <span>
            <b>{chat.name}</b>
            <small>{typing ? chat.typing : chat.status}</small>
          </span>
          <span className="wa-actions">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="1.7">
              <rect x="1" y="2" width="14" height="12" rx="3" />
              <path d="m15 7 5-3v8l-5-3" />
            </svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2" />
            </svg>
          </span>
        </div>
        <div className="wa-body">
          <span className="wa-day">{chat.today}</span>
          <div className="wa-messages">
            {chat.messages.slice(0, shown).map((message, index) => (
              <div key={index} className={`b ${message.from === "me" ? "out" : "in"}`}>
                <span dir="auto">
                  {message.lines.map((line, lineIndex) => (
                    <Fragment key={lineIndex}>
                      {lineIndex > 0 && <br />}
                      {line}
                    </Fragment>
                  ))}
                  {message.quote && (
                    <>
                      <br />
                      <br />
                      <b>
                        {chat.from} {message.quote.name}:
                      </b>{" "}
                      {message.quote.text}
                    </>
                  )}
                </span>
                <span className="t">
                  {message.time}
                  {message.from === "me" && <Ticks />}
                </span>
                {message.footer && <span className="foot">{message.footer}</span>}
              </div>
            ))}
            {typing && (
              <div className="b in typing">
                <i />
                <i />
                <i />
              </div>
            )}
          </div>
        </div>
        <div className="wa-input">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
          <span />
          <Mic />
        </div>
      </div>
    </div>
  );
}

export function StatusBar() {
  return (
    <div className="wa-status" dir="ltr">
      <span>9:41</span>
      <span className="wa-signal">
        <svg width="18" height="11" viewBox="0 0 18 11" fill="currentColor">
          <rect x="0" y="7" width="3" height="4" rx="1" />
          <rect x="5" y="5" width="3" height="6" rx="1" />
          <rect x="10" y="2.5" width="3" height="8.5" rx="1" />
          <rect x="15" y="0" width="3" height="11" rx="1" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12">
          <rect x=".5" y=".5" width="21" height="11" rx="3.5" fill="none" stroke="currentColor" opacity=".4" />
          <rect x="2" y="2" width="15" height="8" rx="2" fill="currentColor" />
          <path d="M23 4v4c.8-.3 1.3-1 1.3-2s-.5-1.7-1.3-2Z" fill="currentColor" opacity=".4" />
        </svg>
      </span>
    </div>
  );
}
