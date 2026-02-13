import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Zap, Layers, Share2, Smartphone } from "lucide-react";

const Index = () => {
  const scrollToPolicies = () => {
    document.getElementById("policies")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-24 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(110_100%_55%/0.06)_0%,transparent_70%)]" />
        <div className="container relative z-10 mx-auto max-w-2xl text-center">
          <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            your daily scroll
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            News, but make it{" "}
            <span className="underline decoration-primary decoration-[3px] underline-offset-4">scrollable.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
            Posty turns today's headlines into fast, swipeable stories.
          </p>
          <button
            onClick={scrollToPolicies}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/80 active:scale-95"
          >
            Read the Policies
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto max-w-xl">
          <h2 className="mb-10 text-center font-display text-2xl font-bold sm:text-3xl">
            What you can do
          </h2>
          <div className="grid gap-5">
            {[
              { icon: Zap, text: "Swipe trending stories in seconds" },
              { icon: Layers, text: "Choose categories you care about" },
              { icon: Share2, text: "Save and share what matters" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium sm:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auth note */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto max-w-xl">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Smartphone className="h-5 w-5 text-primary" />
              <h2 className="font-display text-xl font-bold">Signing in</h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Posty supports Google sign-in and SMS one-time passcodes (OTP) for login.
            </p>
            <p className="mt-4 rounded-xl bg-muted p-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              If you choose SMS login, you may receive a one-time verification code. Msg &amp; data rates
              may apply. Reply STOP to opt out, HELP for help.
            </p>
          </div>
        </div>
      </section>

      {/* Policy links */}
      <section id="policies" className="border-t border-border py-16">
        <div className="container mx-auto flex max-w-sm flex-col items-center gap-4">
          {[
            { href: "/privacy/", label: "Privacy Policy" },
            { href: "/terms-of-use/", label: "Terms of Use" },
            { href: "/terms-of-service/", label: "Terms of Service" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="w-full rounded-2xl border border-primary/40 bg-transparent px-6 py-4 text-center font-display text-sm font-semibold text-primary transition-all hover:bg-primary/10 active:scale-[0.98] sm:text-base"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
