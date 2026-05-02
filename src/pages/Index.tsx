import Navbar from "@/components/Navbar";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import FoodBackground from "@/components/ui/food-background";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "RubicLeaf Café",
    servesCuisine: "Vegetarian",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Beach Road",
      addressLocality: "Kozhikode",
      addressRegion: "Kerala",
      postalCode: "673001",
      addressCountry: "IN",
    },
    telephone: "+919999999999",
    email: "hello@rubicleafcafe.in",
    priceRange: "₹₹",
  };
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: hsl(var(--background)); }
        ::-webkit-scrollbar-thumb { background: hsl(var(--primary) / 0.2); border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: hsl(var(--primary) / 0.4); }
      `}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <main>
        <HeroScrollDemo />
        <section className="animate-fade-in-slow"><Featured /></section>
        <section className="animate-fade-in-slow"><Menu /></section>
        <About />
        <section className="animate-fade-in-slow"><Instagram /></section>
        <section className="animate-fade-in-slow"><Contact /></section>
      </main>
    </>
  );
};

export default Index;
