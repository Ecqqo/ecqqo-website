import { useEffect, useRef, useState } from "react";
import { FeaturePreview, type PreviewView } from "../components/CommandCenter";
import { Calculator } from "../components/Calculator";
import { AlertsDemo, BriefingDemo, CalendarDemo, ChatDemo } from "../components/Demos";
import { Icon } from "../components/Icon";
import { Layout } from "../components/Layout";
import { WhatsAppLink, whatsappNumber } from "../components/WhatsAppLink";
import { useLocale } from "../i18n/locale";
import type { Translation } from "../i18n/translations";

const modes = ["watch", "work"] as const;

const delegatePreviews: Partial<Record<number, PreviewView>> = { 1: "tasks", 2: "activity" };

function Chat({ chat }: { chat: Translation["chat"] }) {
  const phone = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setInView(true);
      observer.disconnect();
    }, { threshold: 0.5 });
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
    <div className="phone" aria-hidden="true" ref={phone}>
      <div className="phone-screen">
        <div className="wa-header">
          <div className="wa-avatar">
            <img src="/logos/logo-icon-light.png" alt="" />
          </div>
          <div>
            <p className="wa-name">{chat.name}</p>
            <p className="wa-status">{typing ? "…" : chat.status}</p>
          </div>
        </div>
        <div className="wa-messages">
          {chat.messages.slice(0, shown).map((message, index) => (
            <div key={index} className={`bubble ${message.from}`}>
              {message.lines.map((line, lineIndex) => (
                <span key={lineIndex} dir="auto">
                  {line || "\u00a0"}
                </span>
              ))}
              {message.footer && <span className="bubble-footer">— {message.footer}</span>}
              <span className="bubble-time">{message.time}</span>
            </div>
          ))}
          {typing && (
            <div className="bubble ecqqo typing">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>
        <div className="wa-input">
          <span>{chat.placeholder}</span>
          <span className="wa-mic">
            <Icon name="mic" strokeWidth={2} />
          </span>
        </div>
      </div>
    </div>
  );
}

function Modes() {
  const { t } = useLocale();
  const [mode, setMode] = useState(0);
  const [feature, setFeature] = useState(0);
  const { features } = t.modes[modes[mode]];
  const current = features[feature];
  const demo = {
    alerts: <AlertsDemo />,
    briefing: <BriefingDemo />,
    calendar: <CalendarDemo />,
    chat: <ChatDemo chat={current.chat} />,
  }[current.demo];

  return (
    <div className="modes">
      <div className="segmented modes-tabs" role="tablist">
        {modes.map((key, index) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={mode === index}
            className={mode === index ? "active" : ""}
            onClick={() => {
              setMode(index);
              setFeature(0);
            }}
          >
            {t.modes[key].tab}
          </button>
        ))}
      </div>
      <div className="feature-tabs" role="tablist">
        {features.map((item, index) => (
          <button key={item.name} type="button" role="tab" aria-selected={feature === index} className={feature === index ? "active" : ""} onClick={() => setFeature(index)}>
            {item.name}
          </button>
        ))}
      </div>
      <div className="modes-panel" role="tabpanel" key={`${mode}-${feature}`}>
        <p>{current.text}</p>
        {demo}
      </div>
    </div>
  );
}

export function Home() {
  const { t } = useLocale();

  return (
    <Layout>
      <main>
        <div className="hero-wrap">
          <div className="aurora" aria-hidden="true" />
          <section className="hero container">
          <div className="hero-copy">
            <h1>
              {t.hero.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <WhatsAppLink className="button">{t.hero.cta}</WhatsAppLink>
          </div>
          <div className="phone-wrap">
            <Chat chat={t.chat} />
            <p className="phone-note">{t.chat.note}</p>
          </div>
          </section>
        </div>

        <section className="section container" id="what">
          <header className="section-header">
            <h2>{t.modes.title}</h2>
          </header>
          <Modes />
        </section>

        <section className="section container" id="calculator">
          <header className="section-header">
            <h2>{t.calculator.title}</h2>
          </header>
          <Calculator />
        </section>

        <section className="section container" id="pricing">
          <header className="section-header">
            <h2>{t.pricing.title}</h2>
          </header>
          <div className="plans">
            {t.pricing.plans.map((plan, index) => (
              <article key={plan.name} className={`card plan ${index === 1 ? "featured" : ""}`}>
                <h3>{plan.name}</h3>
                <p className="plan-audience">{plan.audience}</p>
                <p className="plan-price">
                  <bdi dir="ltr">{plan.price}</bdi>
                  <span>{t.pricing.month}</span>
                </p>
                <ul>
                  {plan.features.map((feature, featureIndex) => {
                    const preview = index === 1 ? delegatePreviews[featureIndex] : undefined;
                    return (
                      <li key={feature}>
                        <span>{feature}</span>
                        {preview && <FeaturePreview view={preview} label={feature} />}
                      </li>
                    );
                  })}
                </ul>
                <WhatsAppLink className={`button ${index === 1 ? "" : "secondary"}`}>{t.pricing.cta}</WhatsAppLink>
              </article>
            ))}
          </div>
          <p className="plans-note">{t.pricing.note}</p>
        </section>

        <section className="section container narrow" id="faq">
          <header className="section-header">
            <h2>{t.faq.title}</h2>
          </header>
          <div className="faq">
            {t.faq.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="container">
          <div className="final">
            <h2>{t.final.title}</h2>
            <WhatsAppLink className="button light">{t.hero.cta}</WhatsAppLink>
            <p className="final-number">
              <bdi dir="ltr">{whatsappNumber}</bdi>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
