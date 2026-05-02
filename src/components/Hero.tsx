import hero from "@/assets/hero.jpg";
import { ArrowRight, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Fresh vegetarian dishes at RubicLeaf Café"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container-tight relative z-10 py-32 md:py-40 text-primary-foreground">
        <div className="max-w-2xl animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
            <Leaf className="w-4 h-4" /> 100% Vegetarian · Kozhikode, Kerala
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-6">
            Fresh. <span className="italic text-accent">Healthy.</span><br />Delicious.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-xl mb-10 leading-relaxed">
            A cozy little corner in Kozhikode serving wholesome, organic vegetarian food made with love and locally-sourced produce.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary-foreground text-primary font-medium shadow-elegant hover:scale-[1.03] transition-transform"
            >
              View Menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/919999999999?text=Hi%20RubicLeaf%2C%20I'd%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40 backdrop-blur-sm text-primary-foreground font-medium hover:bg-white/10 transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-primary-foreground/70 text-xs tracking-widest uppercase">
        Scroll
      </div>
    </section>
  );
};

export default Hero;
