import { Layout } from "../components/Layout";

export function DataDeletion() {
  return (
    <Layout>
      <main className="legal-page container" dir="ltr" lang="en">
        <h1>Data Deletion Instructions</h1>
        <p className="legal-updated">Last updated October 30, 2026</p>
        <section>
          <h2>Request deletion</h2>
          <p>Send a request through our <a href="/contact?category=data-deletion">contact form</a> with the category “Privacy and data requests”, using the email address associated with your Ecqqo account. Include the WhatsApp phone number or business account identifier connected to Ecqqo, if applicable.</p>
        </section>
        <section>
          <h2>What happens next</h2>
          <ol>
            <li>We acknowledge your request and may ask for information needed to verify your identity and authority over the account.</li>
            <li>We cancel any subscription, disconnect your email and calendar accounts, and delete the personal information associated with the verified account. We keep billing records only as tax and accounting law requires.</li>
            <li>We confirm completion by email. We aim to complete valid requests within 30 days, subject to applicable law.</li>
          </ol>
          <p>Backup copies are deleted automatically within a few days. To get a copy of your data instead, use the same form and say so in your message.</p>
        </section>
        <section>
          <h2>Disconnect WhatsApp</h2>
          <p>You may also remove Ecqqo's access from your Meta Business settings. Disconnecting prevents future access, but contact us using the instructions above if you also want previously stored information deleted.</p>
        </section>
      </main>
    </Layout>
  );
}
