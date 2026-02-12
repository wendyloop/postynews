import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-primary sm:text-4xl">Posty Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Effective date: February 12, 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <Section title="1. Who we are">
          Posty is a news app that helps users discover and watch short-form news content. If you have questions, contact us at{" "}
          <a href="mailto:agai.main@gmail.com" className="text-primary hover:underline">agai.main@gmail.com</a>.
        </Section>

        <Section title="2. Information we collect">
          <p>We may collect:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong className="text-foreground">Account information:</strong> email address and basic profile info when you sign in with Google (as provided by Google).</li>
            <li><strong className="text-foreground">Phone number (optional):</strong> if you choose SMS login for one-time passcodes (OTP).</li>
            <li><strong className="text-foreground">App usage data:</strong> basic analytics such as app interactions and performance (if enabled).</li>
            <li><strong className="text-foreground">Device information:</strong> device type, OS version, and identifiers needed for security and reliability.</li>
          </ul>
        </Section>

        <Section title="3. How we use information">
          <p>We use your information to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Create and manage your account</li>
            <li>Authenticate you (Google sign-in and/or SMS OTP)</li>
            <li>Provide the core app experience (show content, preferences)</li>
            <li>Maintain security, prevent fraud, debug issues</li>
            <li>Communicate with you about important account or service updates</li>
          </ul>
        </Section>

        <Section title="4. SMS (one-time passcodes)">
          If you choose SMS login, we use your phone number to send OTP messages for authentication. Msg &amp; data rates may apply. You can reply STOP to opt out and HELP for help.
        </Section>

        <Section title="5. How we share information">
          <p>We do not sell your personal information. We may share information with:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Service providers that help us run the app (authentication, hosting, messaging, analytics)</li>
            <li>Legal and safety needs (to comply with law or protect users and the platform)</li>
          </ul>
        </Section>

        <Section title="6. Data retention">
          We keep data as long as needed to provide the service, comply with legal obligations, and resolve disputes. You may request deletion where applicable.
        </Section>

        <Section title="7. Your choices">
          <p>You can:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Choose Google sign-in or SMS OTP login (if available)</li>
            <li>Opt out of SMS by replying STOP</li>
            <li>Contact us to request access, updates, or deletion of your data (where applicable)</li>
          </ul>
        </Section>

        <Section title="8. Security">
          We use reasonable administrative, technical, and organizational measures to protect your data.
        </Section>

        <Section title="9. Children">
          Posty is not intended for children under 13 (or the minimum age required in your region).
        </Section>

        <Section title="10. Contact">
          Email: <a href="mailto:agai.main@gmail.com" className="text-primary hover:underline">agai.main@gmail.com</a>
        </Section>
      </div>
    </main>
    <Footer />
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="mb-3 font-display text-lg font-semibold text-foreground">{title}</h2>
    <div>{children}</div>
  </section>
);

export default PrivacyPolicy;
