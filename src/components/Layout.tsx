import type { ReactNode } from "react";
import { useLocale } from "../i18n/locale";
import { WhatsAppLink } from "./WhatsAppLink";

export function Layout({ children }: { children: ReactNode }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <>
      <header className="wrap">
        <nav>
          <a className="logo" href="/">
            <img src="/logos/ecqqo-mark.png" alt="" />
            {t.brandName}
          </a>
          <ul>
            <li><a href="/#what">{t.nav.what}</a></li>
            <li><a href="/#pricing">{t.nav.pricing}</a></li>
            <li><a href="/#faq">{t.nav.faq}</a></li>
            <li><a href="/contact">{t.nav.contact}</a></li>
          </ul>
          <button
            type="button"
            className="lang"
            aria-label={t.nav.language}
            lang={locale === "en" ? "ar" : "en"}
            onClick={() => setLocale(locale === "en" ? "ar" : "en")}
          >
            {locale === "en" ? "العربية" : "English"}
          </button>
          <WhatsAppLink className="btn sm">{t.nav.cta}</WhatsAppLink>
        </nav>
      </header>

      {children}

      <footer>
        <div className="wrap">
          <a className="logo" href="/">
            <img src="/logos/ecqqo-mark.png" alt="" />
            {t.brandName}
          </a>
          <ul>
            <li><a href="/privacy">{t.footer.privacy}</a></li>
            <li><a href="/terms">{t.footer.terms}</a></li>
            <li><a href="/data-deletion">{t.footer.dataDeletion}</a></li>
            <li><a href="/contact">{t.nav.contact}</a></li>
          </ul>
          <span dir="ltr">© 2026 Ecqqo LLC</span>
        </div>
      </footer>
    </>
  );
}
