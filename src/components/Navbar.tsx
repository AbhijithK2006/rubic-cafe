import { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/85 backdrop-blur-lg shadow-soft" : "bg-transparent"
      )}
    >
      <nav className="container-tight flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2 font-display text-xl font-semibold">
          <span className="w-9 h-9 rounded-full bg-gradient-leaf grid place-items-center text-primary-foreground">
            <Leaf className="w-5 h-5" strokeWidth={2.2} />
          </span>
          <span>GreenLeaf<span className="text-primary"> Café</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#menu"
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-glow transition-colors shadow-soft"
            >
              Order Now
            </a>
          </li>
        </ul>

        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-fade-in">
          <ul className="container-tight py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
