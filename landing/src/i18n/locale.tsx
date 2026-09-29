import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Locale, type Translation } from "./translations";

const storageKey = "ecqqo-locale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {},
  t: translations.en,
});

function storedLocale(): Locale {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "en" || saved === "ar") return saved;
  } catch {}
  return "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState(storedLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.title = translations[locale].pageTitle;
  }, [locale]);

  function setLocale(next: Locale) {
    setLocaleState(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {}
  }

  return <LocaleContext value={{ locale, setLocale, t: translations[locale] }}>{children}</LocaleContext>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
