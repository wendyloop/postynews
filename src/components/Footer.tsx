import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col items-center gap-6 text-center">
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/privacy" className="text-muted-foreground transition-colors hover:text-primary">
            Privacy Policy
          </Link>
          <Link to="/terms-of-use" className="text-muted-foreground transition-colors hover:text-primary">
            Terms of Use
          </Link>
          <Link to="/terms-of-service" className="text-muted-foreground transition-colors hover:text-primary">
            Terms of Service
          </Link>
        </nav>
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>
            Questions?{" "}
            <a href="mailto:support@postyapp.com" className="text-primary hover:underline">
              support@postyapp.com
            </a>
          </p>
          <p>Effective date: [Month Day, Year]</p>
        </div>
        <p className="font-display text-xs text-muted-foreground/50">© Posty</p>
      </div>
    </footer>
  );
};

export default Footer;
