import { Calculator } from "../components/Calculator";
import { Features } from "../components/Features";
import { HeroChat } from "../components/HeroChat";
import { Check, Plus, Ticks } from "../components/Icon";
import { Layout } from "../components/Layout";
import { WhatsAppLink, whatsappNumber } from "../components/WhatsAppLink";
import { useLocale } from "../i18n/locale";

const integrations = [
  ["whatsapp.png", "WhatsApp"],
  ["gmail.jpg", "Gmail"],
  ["google-calendar.jpg", "Google Calendar"],
  ["outlook.jpg", "Outlook"],
];

export function Home() {
  const { t } = useLocale();

  return (
    <Layout>
      <main>
        <section className="hero">
          <div className="wrap">
            <h1>
              {t.hero.title.before}
              <span className="nw">
                <em>
                  {t.hero.title.highlight}
                  <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M3 13 C 60 5, 120 6, 170 9 S 260 15, 297 6" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </em>
                {t.hero.title.after}
                <Ticks label={t.hero.seen} />
              </span>
            </h1>
            <p className="sub">{t.hero.sub}</p>
            <WhatsAppLink className="btn big">{t.hero.cta}</WhatsAppLink>
            <p className="works">
              <span>{t.hero.worksWith}</span>
              <span className="icons">
                {integrations.map(([icon, name]) => (
                  <img key={icon} src={`/icons/${icon}`} alt={name} title={name} />
                ))}
              </span>
            </p>
          </div>
          <div className="stage">
            <img className="walker" src="/illustrations/hero.webp" alt="" />
            <div className="phone">
              <HeroChat />
              <p className="phone-note">{t.chat.note}</p>
            </div>
          </div>
        </section>

        <section className="sec" id="what">
          <div className="wrap">
            <h2>{t.modes.title}</h2>
            <Features />
          </div>
        </section>

        <section className="sec calc-sec" id="calculator">
          <div className="wrap">
            <h2>{t.calculator.title}</h2>
            <Calculator />
          </div>
        </section>

        <section className="sec cc">
          <div className="wrap">
            <h2>
              {t.showcase.title} <span>{t.showcase.subtitle}</span>
            </h2>
            <div className="cc-stage">
              <div className="frame" dir="ltr">
                <picture>
                  <source media="(max-width: 860px)" srcSet="/app/today-mobile.webp" />
                  <img src="/app/today-desktop.webp" alt={t.showcase.alt} />
                </picture>
              </div>
              <img className="hand" src="/illustrations/handover.webp" alt="" />
            </div>
          </div>
        </section>

        <section className="priv" id="privacy">
          <div className="wrap">
            <img className="art" src="/illustrations/lock.webp" alt="" />
            <div>
              <h2>
                {t.privacy.title} <span>{t.privacy.subtitle}</span>
              </h2>
              <ul>
                {t.privacy.promises.map((promise) => (
                  <li key={promise}>
                    <Check />
                    {promise}
                  </li>
                ))}
              </ul>
              <a className="seal" href="/privacy">
                <i>GDPR</i>
                {t.privacy.gdpr}
              </a>
            </div>
          </div>
        </section>

        <section className="sec price" id="pricing">
          <div className="wrap">
            <h2>{t.pricing.title}</h2>
            <div className="plans">
              {t.pricing.plans.map((plan, index) => (
                <article key={plan.name} className={`plan ${index === 1 ? "rec" : ""}`}>
                  {index === 1 && <span className="rb">{t.pricing.recommended}</span>}
                  <h3>{plan.name}</h3>
                  <p className="who">{plan.audience}</p>
                  <p className="amt">
                    <bdi dir="ltr">{plan.price}</bdi>
                    <small>{t.pricing.month}</small>
                  </p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Check />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppLink className={`btn ${index === 1 ? "" : "dark"}`}>{t.pricing.cta}</WhatsAppLink>
                </article>
              ))}
            </div>
            <p className="plans-note">{t.pricing.note}</p>
          </div>
        </section>

        <section className="sec faq-sec" id="faq">
          <div className="wrap">
            <h2>{t.faq.title}</h2>
            <div className="faq">
              {t.faq.items.map((item) => (
                <details key={item.q}>
                  <summary>
                    {item.q}
                    <i>
                      <Plus />
                    </i>
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final">
          <div className="wrap">
            <img src="/illustrations/final.webp" alt="" />
            <h2>{t.final.title}</h2>
            <WhatsAppLink className="btn big">{t.hero.cta}</WhatsAppLink>
            <a className="tel" href="tel:+12819445450">
              <bdi dir="ltr">{whatsappNumber}</bdi>
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
