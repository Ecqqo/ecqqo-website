import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLocale } from "../i18n/locale";
import { WhatsAppLink } from "./WhatsAppLink";

type Theme = "light" | "device" | "dark";

function storedTheme(): Theme {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {}
  return "device";
}

const themeIcons: Record<Theme, ReactNode> = {
  light: (
    <>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  device: (
    <>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  dark: <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />,
};

export function Layout({ children }: { children: ReactNode }) {
  const { locale, setLocale, t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [theme, setTheme] = useState(storedTheme);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      document.documentElement.dataset.theme = theme === "device" ? (media.matches ? "dark" : "light") : theme;
    };
    apply();
    if (theme !== "device") return;
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [theme]);

  useEffect(() => {
    if (!settingsOpen) return;
    const close = (event: PointerEvent) => {
      if (!settingsRef.current?.contains(event.target as Node)) setSettingsOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [settingsOpen]);

  function chooseTheme(next: Theme) {
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  const links = [
    ["/#what", t.nav.what],
    ["/#pricing", t.nav.pricing],
    ["/#faq", t.nav.faq],
  ];

  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="/">
            <img src="/logos/logo-icon.png" alt="" />
            {t.brandName}
          </a>
          <nav className={menuOpen ? "open" : ""}>
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a href="/contact">{t.nav.contact}</a>
          </nav>
          <div className="topbar-actions">
            <div className="settings" ref={settingsRef}>
              <button
                type="button"
                className="icon-button"
                aria-label={t.nav.settings}
                aria-expanded={settingsOpen}
                onClick={() => setSettingsOpen((open) => !open)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
                </svg>
              </button>
              {settingsOpen && (
                <div className="settings-popover">
                  <p className="settings-label">{t.nav.language}</p>
                  <div className="segmented">
                    <button type="button" className={locale === "en" ? "active" : ""} onClick={() => setLocale("en")}>
                      English
                    </button>
                    <button type="button" className={locale === "ar" ? "active" : ""} onClick={() => setLocale("ar")}>
                      العربية
                    </button>
                  </div>
                  <p className="settings-label">{t.nav.theme}</p>
                  <div className="segmented">
                    {(["light", "device", "dark"] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={theme === option ? "active" : ""}
                        aria-label={t.nav[option]}
                        title={t.nav[option]}
                        onClick={() => chooseTheme(option)}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          {themeIcons[option]}
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <WhatsAppLink className="button small">{t.nav.cta}</WhatsAppLink>
            <button
              type="button"
              className={`icon-button burger ${menuOpen ? "open" : ""}`}
              aria-label={t.nav.menu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {children}

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <a className="brand" href="/">
              <img src="/logos/logo-icon.png" alt="" />
              {t.brandName}
            </a>
            <p>{t.footer.tagline}</p>
          </div>
          <div className="footer-col">
            <h4>{t.footer.product}</h4>
            {links.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h4>{t.footer.company}</h4>
            <a href="/contact">{t.footer.support}</a>
            <a href="/privacy">{t.footer.privacy}</a>
            <a href="/terms">{t.footer.terms}</a>
            <a href="/data-deletion">{t.footer.dataDeletion}</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>
            © 2026 Ecqqo LLC. {t.footer.rights}
          </p>
        </div>
      </footer>
    </>
  );
}
