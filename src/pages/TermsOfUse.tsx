import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfUse = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-primary sm:text-4xl">Posty Terms of Use</h1>
      <p className="mt-2 text-sm text-muted-foreground">Effective date: February 12, 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <Section title="1. Acceptance of terms">
          By using Posty, you agree to these Terms of Use and our Privacy Policy.
        </Section>

        <Section title="2. What Posty provides">
          Posty helps you discover and view news content and links to third-party sources.
        </Section>

        <Section title="3. Accounts">
          You're responsible for maintaining the confidentiality of your account and for activity that occurs under your account.
        </Section>

        <Section title="4. Content and third-party links">
          Posty may display content from third parties and provide links to external sites. We don't control third-party content or websites and aren't responsible for them.
        </Section>

        <Section title="5. Acceptable use">
          <p>You agree not to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Use the app for unlawful purposes</li>
            <li>Attempt to hack, disrupt, or reverse engineer the app</li>
            <li>Abuse, harass, or harm others</li>
            <li>Scrape or copy content in a way that violates rights or laws</li>
          </ul>
        </Section>

        <Section title="6. Intellectual property">
          Posty and its branding, design, and software are owned by us or our licensors. You may not copy or distribute our app or brand assets without permission.
        </Section>

        <Section title="7. Changes and availability">
          We may update or modify the app at any time, including adding/removing features.
        </Section>

        <Section title="8. Contact">
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

export default TermsOfUse;
