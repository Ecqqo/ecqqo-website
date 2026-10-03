import { Layout } from "../components/Layout";

export function Privacy() {
  return (
    <Layout>
      <main className="legal-page container" dir="ltr" lang="en">
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Effective September 28, 2026</p>

        <section>
          <h2>1. Who We Are</h2>
          <p>Ecqqo LLC ("Ecqqo," "we," "us," or "our") is a United States company that operates ecqqo.com and app.ecqqo.com and provides Ecqqo, an AI executive assistant service that works in WhatsApp.</p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <ul>
            <li><strong>Account and contact information:</strong> your name, email address, phone number, company, and preferences.</li>
            <li><strong>WhatsApp data:</strong> your WhatsApp Business account identifiers, phone numbers, profile information, message content, attachments, contacts, message metadata, and delivery status when you connect WhatsApp or communicate through the service.</li>
            <li><strong>Connected-service data:</strong> calendar, email, contact, and related information you authorize us to access.</li>
            <li><strong>Billing information:</strong> your plan, subscription status, and usage. Payment card details are collected and processed by Stripe.</li>
            <li><strong>Technical information:</strong> IP address, browser and device information, logs, and security events.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Information</h2>
          <ul>
            <li>Provide requested assistant features, including scheduling, reminders, summaries, urgent-message alerts, reports, and communications.</li>
            <li>Connect and administer WhatsApp Business accounts through Meta's Cloud API.</li>
            <li>Authenticate users, maintain security, prevent abuse, and troubleshoot the service.</li>
            <li>Process subscriptions and payments, and communicate with you about Ecqqo.</li>
            <li>Comply with law and enforce our agreements.</li>
          </ul>
          <p>We do not sell personal information. We do not use WhatsApp message content for advertising.</p>
        </section>

        <section>
          <h2>4. How We Share Information</h2>
          <p>We disclose information only as needed to operate the service, at your direction, or when required by law. Recipients may include Meta and WhatsApp, cloud infrastructure providers, connected calendar and email providers, professional advisers, and authorities with a valid legal basis. Providers may process information only to perform services for us under their applicable agreements.</p>
          <p>Our service providers fall into these categories: cloud hosting and database providers, payment processors, messaging platforms, services that connect your email and calendar accounts, and artificial intelligence providers that process content to generate replies, summaries, transcriptions, and alerts.</p>        </section>

        <section>
          <h2>5. Meta Platform Data</h2>
          <p>Information received from Meta products is handled in accordance with Meta's applicable platform terms and developer policies. We request only the permissions needed to onboard and support a customer's WhatsApp Business account and to send or receive messages at that customer's direction.</p>
        </section>

        <section>
          <h2>6. Data Retention and Deletion</h2>
          <p>We retain information only while needed to provide the service, meet legal obligations, resolve disputes, and maintain security. When an account is disconnected or a valid deletion request is completed, we delete or de-identify associated personal information unless retention is legally required. Backup copies may remain for a limited period before automatic deletion.</p>
          <p>You can request deletion by following our <a href="/data-deletion">data deletion instructions</a> or through our <a href="/contact?category=data-deletion">contact form</a>.</p>
        </section>

        <section>
          <h2>7. Security and International Processing</h2>
          <p>We use reasonable administrative, technical, and organizational safeguards, including encryption in transit and access controls. Information may be processed in the United States and other countries where our providers operate, subject to applicable safeguards.</p>
        </section>

        <section>
          <h2>8. Your Choices and Rights</h2>
          <p>Depending on where you live, you may have rights to access, correct, delete, or obtain a copy of personal information, or to object to or restrict certain processing. You may revoke a connected service in its settings and contact us to exercise your rights. We may need to verify your identity before fulfilling a request.</p>
        </section>

        <section>
          <h2>9. Children</h2>
          <p>Ecqqo is a business service and is not directed to children under 18. We do not knowingly collect personal information from children.</p>
        </section>

        <section>
          <h2>10. Changes and Contact</h2>
          <p>We may update this policy and will post the revised effective date here. For privacy questions or requests, contact Ecqqo LLC through our <a href="/contact">contact form</a>.</p>
        </section>
      </main>
    </Layout>
  );
}
