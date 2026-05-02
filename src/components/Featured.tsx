import { SocialCard } from "@/components/ui/social-card";
import { Info, ShoppingCart, Heart } from "lucide-react";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";

const dishes = [
  { img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2080&auto=format&fit=crop", name: "Avocado Toast", price: "₹220", tag: "Best Seller", desc: "Creamy avocado on toasted sourdough with microgreens." },
  { img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop", name: "Green Smoothie Bowl", price: "₹260", tag: "Vegan", desc: "Nutrient-packed spinach and fruit bowl with crunchy granola." },
  { img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop", name: "Buddha Bowl", price: "₹320", tag: "Protein", desc: "A colorful mix of grains, veggies, and plant-based protein." },
  { img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=2071&auto=format&fit=crop", name: "Matcha Latte", price: "₹180", tag: "House Special", desc: "Ceremonial grade matcha whisked with creamy oat milk." },
];

const Featured = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-soft">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Best Sellers</p>
          <h2 className="text-4xl md:text-5xl mb-5">Loved by our regulars</h2>
          <p className="text-muted-foreground text-lg">
            Handpicked favourites that keep our guests coming back, made fresh every morning.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {dishes.map((d, i) => (
            <SocialCard
              key={d.name}
              title={d.name}
              description={d.desc}
              image={d.img}
              price={d.price}
              tag={d.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
