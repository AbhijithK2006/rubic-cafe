import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please write a message").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    toast.success("Thanks! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Visit Us</p>
          <h2 className="text-4xl md:text-5xl mb-4">Come say hello</h2>
          <p className="text-muted-foreground text-lg">
            Drop by, call us, or send a message — we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card shadow-soft space-y-5">
              <InfoRow icon={MapPin} title="Address" lines={["Beach Road", "Kozhikode, Kerala 673001"]} />
              <InfoRow icon={Phone} title="Phone" lines={["+919999999999"]} />
              <InfoRow icon={Mail} title="Email" lines={["hello@rubicleafcafe.in"]} />
              <InfoRow icon={Clock} title="Hours" lines={["Mon — Sun · 8 AM — 10 PM"]} />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-soft aspect-[16/10] bg-muted">
              <iframe
                title="RubicLeaf Café location"
                src="https://www.google.com/maps?q=Beach+Road,+Kozhikode,+Kerala&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl bg-card shadow-soft space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary-glow transition-colors shadow-soft"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ icon: Icon, title, lines }: { icon: any; title: string; lines: string[] }) => (
  <div className="flex gap-4">
    <div className="w-11 h-11 rounded-xl bg-secondary grid place-items-center text-primary flex-shrink-0">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      {lines.map((l) => <p key={l} className="text-muted-foreground text-sm">{l}</p>)}
    </div>
  </div>
);

export default Contact;
