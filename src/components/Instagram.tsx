import { Instagram as IgIcon } from "lucide-react";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import pancakes from "@/assets/menu-pancakes.jpg";
import juice from "@/assets/menu-juice.jpg";

const posts = [dish2, dish1, pancakes, dish3, juice, dish4];

const Instagram = () => (
  <section className="py-24 md:py-28 bg-background">
    <div className="container-tight">
      <div className="text-center mb-12">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Follow Along</p>
        <h2 className="text-3xl md:text-4xl mb-3">@greenleaf.kozhikode</h2>
        <p className="text-muted-foreground">A peek into our daily kitchen on Instagram.</p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
        {posts.map((p, i) => (
          <a
            key={i}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-xl"
          >
            <img src={p} alt={`Instagram post ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors grid place-items-center">
              <IgIcon className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Instagram;
