const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col items-center gap-6 text-center">
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="/privacy/" className="text-muted-foreground transition-colors hover:text-primary">
            Privacy Policy
          </a>
          <a href="/terms-of-use/" className="text-muted-foreground transition-colors hover:text-primary">
            Terms of Use
          </a>
          <a href="/terms-of-service/" className="text-muted-foreground transition-colors hover:text-primary">
            Terms of Service
          </a>
        </nav>
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>
             Questions?{" "}
            <a href="mailto:agai.main@gmail.com" className="text-primary hover:underline">
              agai.main@gmail.com
            </a>
          </p>
          <p>Effective date: February 12, 2026</p>
        </div>
        <p className="font-display text-xs text-muted-foreground/50">© Posty</p>
      </div>
    </footer>
  );
};

export default Footer;
