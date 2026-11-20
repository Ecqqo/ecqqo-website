import { useEffect, type ReactNode } from "react";
import { useLocale } from "../i18n/locale";
import { WhatsAppLink, whatsappNumber } from "./WhatsAppLink";

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
    return () => observer.disconnect();
  }, []);
}

export function Layout({ children }: { children: ReactNode }) {
  const { locale, setLocale, t } = useLocale();
  const links = [
    ["/#what", t.nav.what],
    ["/#pricing", t.nav.pricing],
    ["/#faq", t.nav.faq],
    ["/contact", t.nav.contact],
  ];
  useReveal();

  return (
    <>
      <header>
        <nav className="wrap">
          <a className="logo" href="/">
            <img src="/logos/ecqqo-mark.png" alt="" />
            {t.brandName}
          </a>
          <ul id="menu" popover="auto" onClick={(event) => event.currentTarget.hidePopover()}>
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
            <li className="lang-item">
              <button
                type="button"
                className="lang"
                aria-label={t.nav.language}
                lang={locale === "en" ? "ar" : "en"}
                onClick={() => setLocale(locale === "en" ? "ar" : "en")}
              >
                {locale === "en" ? "العربية" : "English"}
              </button>
            </li>
          </ul>
          <WhatsAppLink className="btn sm">{t.nav.cta}</WhatsAppLink>
          <button type="button" className="menu" popoverTarget="menu" aria-label={t.nav.menu}>
            <i />
            <i />
          </button>
        </nav>
      </header>

      {children}

      <footer>
        <div className="wrap">
          <div className="brand">
            <a className="logo" href="/">
              <img src="/logos/ecqqo-mark.png" alt="" />
              {t.brandName}
            </a>
            <p>{t.footer.tagline}</p>
            <WhatsAppLink className="btn">{t.nav.cta}</WhatsAppLink>
          </div>
          <div className="cols">
            <div>
              <h3>{t.footer.product}</h3>
              <ul>
                <li><a href="/#what">{t.nav.what}</a></li>
                <li><a href="/#pricing">{t.nav.pricing}</a></li>
                <li><a href="/#faq">{t.nav.faq}</a></li>
              </ul>
            </div>
            <div>
              <h3>{t.footer.company}</h3>
              <ul>
                <li><a href="/contact">{t.nav.contact}</a></li>
                <li>
                  <a href="tel:+12819445450">
                    <bdi dir="ltr">{whatsappNumber}</bdi>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>{t.footer.legal}</h3>
              <ul>
                <li><a href="/privacy">{t.footer.privacy}</a></li>
                <li><a href="/terms">{t.footer.terms}</a></li>
                <li><a href="/data-deletion">{t.footer.dataDeletion}</a></li>
              </ul>
            </div>
          </div>
          <span className="copy" dir="ltr">© 2026 Ecqqo LLC</span>
        </div>
      </footer>
    </>
  );
}
