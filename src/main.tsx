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

const Page = pages[location.pathname.replace(/\/$/, "")] ?? Home;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocaleProvider>
      <Page />
    </LocaleProvider>
  </StrictMode>,
);
