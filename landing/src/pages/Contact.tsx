import { useState, type FormEvent } from "react";
import { Layout } from "../components/Layout";
import { useLocale } from "../i18n/locale";

const contactEndpoint = import.meta.env.DEV ? "http://localhost:3002/api/contact" : "https://app.ecqqo.com/api/contact";

export function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const categories = Object.entries(t.contact.categories);
  const requestedCategory = new URLSearchParams(location.search).get("category");
  const initialCategory = categories.find(([key]) => key === requestedCategory)?.[0] ?? "";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const response = await fetch(contactEndpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))),
    }).catch(() => null);
    setStatus(response?.ok ? "sent" : "failed");
  }

  return (
    <Layout>
      <main className="contact container">
        <header className="section-header">
          <h1>{t.contact.title}</h1>
        </header>
        {status === "sent" ? (
          <p className="contact-sent" role="status">
            {t.contact.sent}
          </p>
        ) : (
          <form className="contact-form" onSubmit={submit}>
            <label>
              {t.contact.name}
              <input id="contact-name" name="name" required maxLength={120} autoComplete="name" />
            </label>
            <label>
              {t.contact.email}
              <input id="contact-email" name="email" type="email" required maxLength={254} autoComplete="email" dir="ltr" />
            </label>
            <label>
              {t.contact.category}
              <select id="contact-category" name="category" required defaultValue={initialCategory}>
                <option value="" disabled>
                  {t.contact.chooseCategory}
                </option>
                {categories.map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {t.contact.subject}
              <input id="contact-title" name="title" required maxLength={150} />
            </label>
            <label>
              {t.contact.message}
              <textarea id="contact-message" name="message" required maxLength={5000} rows={6} />
            </label>
            <input className="contact-trap" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <button type="submit" className="button" disabled={status === "sending"}>
              {status === "sending" ? t.contact.sending : t.contact.send}
            </button>
            {status === "failed" && (
              <p className="contact-failed" role="alert">
                {t.contact.failed}
              </p>
            )}
          </form>
        )}
      </main>
    </Layout>
  );
}
