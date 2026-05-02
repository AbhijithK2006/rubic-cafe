import { useState } from "react";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import pancakes from "@/assets/menu-pancakes.jpg";
import dosa from "@/assets/menu-dosa.jpg";
import wrap from "@/assets/menu-wrap.jpg";
import juice from "@/assets/menu-juice.jpg";
import { cn } from "@/lib/utils";
import { SocialCard } from "@/components/ui/social-card";
import { Info, Plus } from "lucide-react";

type Item = { name: string; price: string; desc: string; img: string };
type Category = "Breakfast" | "Lunch" | "Beverages";

const menu: Record<Category, Item[]> = {
  Breakfast: [
    { name: "Avocado Toast", price: "₹220", desc: "Sourdough, smashed avocado, microgreens, cherry tomatoes.", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2080&auto=format&fit=crop" },
    { name: "Green Smoothie Bowl", price: "₹260", desc: "Spinach, banana, kiwi, granola, chia.", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" },
    { name: "Berry Pancakes", price: "₹240", desc: "Eggless fluffy stack with maple & fresh berries.", img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=2070&auto=format&fit=crop" },
    { name: "Masala Dosa", price: "₹180", desc: "Crisp dosa with spiced potato, sambar & chutney.", img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2070&auto=format&fit=crop" },
  ],
  Lunch: [
    { name: "Buddha Bowl", price: "₹320", desc: "Quinoa, chickpeas, roasted veg, avocado, tahini.", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop" },
    { name: "Paneer Veggie Wrap", price: "₹260", desc: "Grilled paneer, hummus, fresh veg in whole-wheat wrap.", img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Garden Salad", price: "₹230", desc: "Seasonal greens, seeds, citrus vinaigrette.", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop" },
    { name: "Rainbow Bowl", price: "₹290", desc: "Brown rice, beans, roasted vegetables, salsa.", img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2070&auto=format&fit=crop" },
  ],
  Beverages: [
    { name: "Matcha Latte", price: "₹180", desc: "Ceremonial matcha, oat milk, light honey.", img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=2071&auto=format&fit=crop" },
    { name: "Cold Pressed Juice", price: "₹160", desc: "Orange-carrot or apple-spinach-mint.", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1974&auto=format&fit=crop" },
    { name: "Filter Coffee", price: "₹120", desc: "Classic Kerala-style strong filter coffee.", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" },
    { name: "Coconut Cooler", price: "₹140", desc: "Tender coconut, lime, mint, a splash of soda.", img: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1974&auto=format&fit=crop" },
  ],
};

const Menu = () => {
  const [active, setActive] = useState<Category>("Breakfast");
  const categories = Object.keys(menu) as Category[];

  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Our Menu</p>
          <h2 className="text-4xl md:text-5xl mb-5">Wholesome, all day long</h2>
          <p className="text-muted-foreground text-lg">
            Crafted with locally-sourced organic produce. Always vegetarian, always fresh.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-secondary rounded-full p-1.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-5 md:px-7 py-2.5 rounded-full text-sm font-medium transition-all",
                  active === c
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-secondary-foreground hover:text-primary"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {menu[active].map((item, i) => (
            <SocialCard
              key={item.name + active}
              title={item.name}
              description={item.desc}
              image={item.img}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
