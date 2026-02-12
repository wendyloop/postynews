import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-primary sm:text-4xl">Posty Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Effective date: [Month Day, Year]</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <Section title="1. The service">
          Posty provides access to a news discovery experience, including content previews and links to full articles/videos hosted by third parties.
        </Section>

        <Section title="2. Eligibility">
          You must be able to form a binding contract in your jurisdiction to use the service.
        </Section>

        <Section title="3. Service limitations">
          We do our best to keep Posty available, but uptime is not guaranteed. Features may change.
        </Section>

        <Section title="4. Disclaimers">
          Posty provides content "as is" and does not guarantee accuracy, completeness, or timeliness of third-party content.
        </Section>

        <Section title="5. Limitation of liability">
          To the fullest extent permitted by law, Posty will not be liable for indirect, incidental, special, consequential, or punitive damages.
        </Section>

        <Section title="6. Termination">
          We may suspend or terminate accounts that violate these terms or for security reasons.
        </Section>

        {/* SMS Program Terms */}
        <section className="rounded-2xl border border-primary/30 bg-card p-6 neon-border-glow sm:p-8">
          <h2 className="mb-4 font-display text-xl font-bold text-primary">SMS Program Terms</h2>
          <p className="mb-4 text-muted-foreground">
            This section is included to describe SMS login/verification messages.
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li><strong className="text-foreground">Program name:</strong> Posty Login Verification</li>
            <li><strong className="text-foreground">Purpose:</strong> Send one-time passcodes (OTP) to verify your account and help you sign in.</li>
            <li><strong className="text-foreground">Message frequency:</strong> Only when you attempt to log in (message frequency varies).</li>
            <li><strong className="text-foreground">Cost:</strong> Msg &amp; data rates may apply.</li>
            <li><strong className="text-foreground">Opt-out:</strong> Reply STOP to opt out of SMS messages.</li>
            <li><strong className="text-foreground">Help:</strong> Reply HELP for help or email <a href="mailto:support@postyapp.com" className="text-primary hover:underline">support@postyapp.com</a>.</li>
            <li><strong className="text-foreground">Consent:</strong> By providing your phone number and using SMS login, you consent to receive SMS messages for authentication. Consent is not a condition of purchase.</li>
          </ul>
        </section>

        <Section title="7. Contact">
          Email: <a href="mailto:support@postyapp.com" className="text-primary hover:underline">support@postyapp.com</a>
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

export default TermsOfService;
