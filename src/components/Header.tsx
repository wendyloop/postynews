const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <a href="/" className="font-display text-xl font-bold text-primary">
          Posty News ⚡
        </a>
        <nav className="flex items-center gap-1 sm:gap-3">
          <a
            href="/privacy/"
            className="rounded-md px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:text-sm"
          >
            Privacy
          </a>
          <a
            href="/terms-of-use/"
            className="rounded-md px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:text-sm"
          >
            Terms of Use
          </a>
          <a
            href="/terms-of-service/"
            className="rounded-md px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:text-sm"
          >
            Terms of Service
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
