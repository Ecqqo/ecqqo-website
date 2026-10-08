import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LocaleProvider } from "./i18n/locale";
import { Home } from "./pages/Home";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Contact } from "./pages/Contact";
import { DataDeletion } from "./pages/DataDeletion";
import "./styles.css";

const pages: Record<string, () => React.JSX.Element> = {
  "/privacy": Privacy,
  "/terms": Terms,
  "/data-deletion": DataDeletion,
  "/contact": Contact,
};

const path = location.pathname.replace(/\/$/, "");
const Page = pages[path] ?? Home;
const canonicalUrl = `https://ecqqo.com${pages[path] ? path : "/"}`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <link rel="canonical" href={canonicalUrl} />
    <meta property="og:url" content={canonicalUrl} />
    <LocaleProvider>
      <Page />
    </LocaleProvider>
  </StrictMode>,
);
