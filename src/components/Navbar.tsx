import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-border">
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <div className="size-9 rounded-lg bg-navy grid place-items-center">
            <span className="text-emerald font-display font-bold text-lg">V</span>
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-navy text-lg">Vridhi Credit</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Financial Services</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-navy/80 hover:text-emerald transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="tel:+919142543546" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-emerald transition-colors">
          <Phone className="size-4" /> +91 91425 43546
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-navy" aria-label="Menu">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-navy font-medium border-b border-border/60 last:border-0">
                {l.label}
              </a>
            ))}
            <a href="tel:+919142543546" className="py-3 text-emerald font-semibold flex items-center gap-2">
              <Phone className="size-4" /> +91 91425 43546
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
