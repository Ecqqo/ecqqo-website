import { Layout } from "../components/Layout";

export function Privacy() {
  return (
    <Layout>
      <main className="legal-page container" dir="ltr" lang="en">
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Effective October 30, 2026</p>

        <section>
          <h2>1. Who We Are</h2>
          <p>Ecqqo LLC ("Ecqqo," "we," "us," or "our") is a United States company that operates ecqqo.com and app.ecqqo.com and provides Ecqqo, an AI executive assistant service that works in WhatsApp.</p>
          <p>We are the controller of the information about you as our customer, such as your account, billing, and usage information. When Ecqqo processes messages and other information about the people you communicate with, we do so on your behalf and under your instructions, as described in our <a href="/terms">Terms of Service</a>.</p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <ul>
            <li><strong>Account and contact information:</strong> your name, email address, phone number, and preferences, including the instructions you give your assistant.</li>
            <li><strong>WhatsApp data:</strong> your WhatsApp Business account identifiers, your contacts, and your messages, including recent message history and the names and phone numbers of the people you chat with.</li>
            <li><strong>Voice notes and images:</strong> we keep a text version, not the original audio or image.</li>
            <li><strong>Connected-service data:</strong> email and calendar information from accounts you connect, used to carry out your requests.</li>
            <li><strong>Billing information:</strong> your plan, subscription status, and usage. Payment card details are collected and processed by our payment processor; we never see your card number.</li>
            <li><strong>Technical information:</strong> IP address, browser and device information, logs, and security events.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Information and Our Legal Bases</h2>
          <ul>
            <li><strong>To provide the service you signed up for</strong>, including answering your requests, alerts, reports, reminders, and connecting your accounts. Legal basis: performance of our contract with you.</li>
            <li><strong>To process messages from the people you communicate with</strong>, so your assistant can help you with them. We do this on your behalf; where we need our own legal basis, it is our legitimate interest in providing the service you asked for, and we never use it for any other purpose.</li>
            <li><strong>To bill you and keep financial records.</strong> Legal basis: performance of our contract and our legal obligations.</li>
            <li><strong>To keep the service secure, prevent abuse, and fix problems.</strong> Legal basis: our legitimate interest in operating a safe and reliable service.</li>
            <li><strong>To send you service messages</strong>, such as payment or connection problems. Legal basis: performance of our contract.</li>
            <li><strong>To comply with law and enforce our agreements.</strong> Legal basis: legal obligations and our legitimate interests.</li>
          </ul>
          <p>We do not sell personal information or use it for advertising, and our AI providers may not use your content to train their models.</p>
        </section>

        <section>
          <h2>4. How We Share Information</h2>
          <p>We share information only as needed to operate the service, at your direction, or when required by law. Our service providers fall into these categories: cloud infrastructure, artificial intelligence, messaging, integrations, payments, and customer support. They may process information only to provide services to us under written data processing agreements. We may also share information with professional advisers and with authorities that have a valid legal basis. A list of our service providers is available on request.</p>
        </section>

        <section>
          <h2>5. Meta Platform Data</h2>
          <p>Information received from Meta products is handled in accordance with Meta's applicable platform terms and developer policies. We request only the permissions needed to onboard and support a customer's WhatsApp Business account and to send or receive messages at that customer's direction.</p>
        </section>

        <section>
          <h2>6. International Transfers</h2>
          <p>We and our providers process information in the United States and other countries where our providers operate. Where the law of your country requires it, transfers are protected by the European Commission's Standard Contractual Clauses or an equivalent mechanism in our providers' data processing agreements.</p>
        </section>

        <section>
          <h2>7. Data Retention</h2>
          <p>We keep your information while your account is open. When you close your account or ask us to delete your information, we delete it within 30 days, except billing records we must keep for tax and accounting purposes. Logs and backups are deleted automatically within 30 days. Some service providers keep limited records of the requests they handle for us for up to 12 months, under their data processing agreements.</p>
        </section>

        <section>
          <h2>8. Security</h2>
          <p>We use administrative, technical, and organizational safeguards, including encryption in transit and at rest and access controls, on independently audited infrastructure.</p>
        </section>

        <section>
          <h2>9. Your Rights</h2>
          <p>Depending on where you live, you may have the right to access your information, receive a copy of it, correct it, delete it, restrict or object to its processing, and withdraw consent you have given. To make a request, use our <a href="/contact?category=data-deletion">contact form</a> with the category "Privacy and data requests". We respond within one month and may need to verify your identity first. You can also disconnect your email, calendar, and WhatsApp accounts at any time.</p>
          <p>If you are in the European Economic Area or the United Kingdom, you have the right to lodge a complaint with your local data protection authority.</p>
        </section>

        <section>
          <h2>10. People Who Message Our Customers</h2>
          <p>If you message someone who uses Ecqqo, we process your messages with them and your name and phone number, on their behalf, so their assistant can help them. We receive this through WhatsApp. We do not contact you or use your information for any other purpose. To exercise your rights, contact the Ecqqo user you message, or use our <a href="/contact?category=data-deletion">contact form</a>.</p>
        </section>

        <section>
          <h2>11. Children</h2>
          <p>Ecqqo is a business service and is not directed to children under 18. We do not knowingly collect personal information from children.</p>
        </section>

        <section>
          <h2>12. Changes and Contact</h2>
          <p>We may update this policy and will post the revised effective date here. For privacy questions or requests, contact Ecqqo LLC through our <a href="/contact?category=data-deletion">contact form</a>.</p>
        </section>
      </main>
    </Layout>
  );
}
