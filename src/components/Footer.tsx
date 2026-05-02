import { Instagram, Facebook, Twitter, Leaf } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-tight py-16 grid md:grid-cols-3 gap-10">
      <div>
        <a href="#home" className="flex items-center gap-2 font-display text-xl font-semibold mb-4">
          <span className="w-9 h-9 rounded-full bg-primary-foreground/15 grid place-items-center">
            <Leaf className="w-5 h-5" />
          </span>
          RubicLeaf Café
        </a>
        <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
          Fresh, organic, vegetarian food served with love in the heart of Kozhikode.
        </p>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Explore</h4>
        <ul className="space-y-2 text-primary-foreground/70 text-sm">
          <li><a href="#home" className="hover:text-primary-foreground transition">Home</a></li>
          <li><a href="#menu" className="hover:text-primary-foreground transition">Menu</a></li>
          <li><a href="#about" className="hover:text-primary-foreground transition">About</a></li>
          <li><a href="#contact" className="hover:text-primary-foreground transition">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Follow us</h4>
        <div className="flex gap-3">
          {[Instagram, Facebook, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 grid place-items-center hover:bg-primary-foreground/20 transition"
              aria-label="Social link"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <p className="text-primary-foreground/70 text-sm mt-6">Beach Road, Kozhikode · Kerala 673001</p>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container-tight py-6 text-center text-primary-foreground/60 text-sm">
        © {new Date().getFullYear()} RubicLeaf Café. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
