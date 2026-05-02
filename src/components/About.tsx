import { motion } from "framer-motion";
import about from "@/assets/about.jpg";
import { Leaf, Heart, Sprout } from "lucide-react";

const values = [
  { icon: Sprout, title: "Locally Organic", desc: "Sourced from Kerala's family farms." },
  { icon: Heart, title: "Made with Love", desc: "Every dish, freshly prepared daily." },
  { icon: Leaf, title: "Plant-Powered", desc: "100% vegetarian, mostly vegan options." },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-accent/30 blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-pulse" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-elegant border-4 border-white/50">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={about}
                alt="Inside RubicLeaf Café in Kozhikode"
                loading="lazy"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 rounded-[3rem] bg-white/40 backdrop-blur-md border border-white/30 shadow-soft"
          >
            <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Story</p>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight font-display font-medium">
              A little corner of <span className="text-gradient italic">Kozhikode</span>, rooted in goodness.
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              RubicLeaf Café started with a simple idea: serve food that's good for you and good for the planet. We bring the freshest organic produce from Kerala's farms straight to your plate.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From bowls bursting with colour to slow-brewed coffees, every detail is thoughtful — because eating well shouldn't be complicated.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div 
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-[2rem] bg-card border border-border/50 shadow-soft hover:shadow-card transition-all"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-secondary/50 grid place-items-center text-primary mb-4">
                <v.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-2">{v.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-snug">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
