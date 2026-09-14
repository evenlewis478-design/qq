import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Star, Flame, Leaf, Armchair, Quote } from "lucide-react";

import heroTacos from "@/assets/hero-tacos.jpg";
import burrito from "@/assets/burrito.jpg";
import alPastor from "@/assets/al-pastor.jpg";
import aguas from "@/assets/aguas.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "La Morenita Taqueria — Menu & Reviews | Lake Station, IN" },
      {
        name: "description",
        content:
          "Authentic Mexican street tacos, al pastor, carnitas and grilled chicken at 330 Central Ave, Lake Station, IN. See the full menu and real customer reviews. Call (219) 963-1505.",
      },
      { property: "og:title", content: "La Morenita Taqueria — Menu & Reviews" },
      {
        property: "og:description",
        content:
          "Full menu and real customer reviews for La Morenita Taqueria, 330 Central Ave, Lake Station, Indiana. Dine-in, takeout and outdoor seating.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "La Morenita Taqueria",
          servesCuisine: "Mexican",
          priceRange: "$10–20",
          telephone: "+1-219-963-1505",
          address: {
            "@type": "PostalAddress",
            streetAddress: "330 Central Ave",
            addressLocality: "Lake Station",
            addressRegion: "IN",
            postalCode: "46405",
            addressCountry: "US",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", reviewCount: "570" },
        }),
      },
    ],
  }),
});

const MENU: { category: string; note?: string; items: { name: string; desc: string }[] }[] = [
  {
    category: "Tacos",
    note: "Corn or flour tortillas, cilantro & onion, salsa on the side",
    items: [
      { name: "Carne Asada", desc: "Grilled marinated steak, chopped fine" },
      { name: "Al Pastor", desc: "Marinated pork with a tangy street-style sauce" },
      { name: "Pollo Asado", desc: "Grilled chicken — the one regulars keep coming back for" },
      { name: "Carnitas", desc: "Slow-cooked pork, tender with crisp edges" },
      { name: "Lengua", desc: "Slow-simmered beef tongue, rich and soft" },
      { name: "Chorizo", desc: "Mexican sausage, spiced and griddled" },
      { name: "Barbacoa", desc: "Shredded seasoned beef" },
      { name: "Tacos Mexican Style", desc: "Chicken or steak on flour tortillas, a house favorite" },
    ],
  },
  {
    category: "Burritos, Tortas & Quesadillas",
    items: [
      { name: "Carne Asada Burrito", desc: "Steak, rice, beans, guacamole and pico de gallo" },
      { name: "Al Pastor Burrito", desc: "Marinated pork wrapped big with all the fixings" },
      { name: "Chicken Burrito", desc: "Grilled pollo asado, rice, beans and salsa" },
      { name: "Torta", desc: "Mexican sandwich with your choice of meat, avocado and jalapeños" },
      { name: "Quesadilla", desc: "Flour tortilla with melted cheese and your choice of meat" },
      { name: "Hawaiian Mexican Burger", desc: "House specialty — grilled burger with a sweet-savory Mexican twist" },
      { name: "Mexican Burger", desc: "A customer favorite, loaded and messy in the best way" },
    ],
  },
  {
    category: "Plates",
    note: "Served with rice, beans and warm tortillas",
    items: [
      { name: "Grilled Chicken Plate", desc: "Juicy roasted pollo asado — the most recommended dish here" },
      { name: "Carne Asada Plate", desc: "Grilled steak with all the sides" },
      { name: "Carnitas Plate", desc: "Weekend favorite, slow-cooked pork" },
      { name: "Taco Plate", desc: "Three tacos of your choice with rice and beans" },
    ],
  },
  {
    category: "Sides & Extras",
    items: [
      { name: "Guacamole & Chips", desc: "Made fresh, a customers' favorite" },
      { name: "Rice & Beans", desc: "Classic sides, made daily" },
      { name: "Grilled Onions & Jalapeños", desc: "Charred on the grill" },
      { name: "Salsa Roja & Verde", desc: "House salsas, mild to hot" },
    ],
  },
  {
    category: "Drinks",
    items: [
      { name: "Aguas Frescas", desc: "Horchata, jamaica and tamarindo, made fresh daily" },
      { name: "Mexican Sodas", desc: "Jarritos and Coca-Cola in glass bottles" },
      { name: "Bottled Water", desc: "" },
    ],
  },
];

const REVIEWS = [
  {
    name: "Karen Cooper",
    text: "In my opinion, they have the best chicken tacos I have ever had. I get them Mexican style on flour tortillas. I was on vacation out of state for 6 weeks and was craving them. That's truly how good they are!",
    stars: 5,
    when: "August 2026",
  },
  {
    name: "Alexius Serrano",
    text: "I've been loyal since the beginning. I highly recommend try everything once, but my OG will always be the roasted chicken.",
    stars: 5,
    when: "August 2026",
  },
  {
    name: "Luis Luna",
    text: "Good food, good people. Chicken is fire and tacos don't disappoint.",
    stars: 5,
    when: "July 2026",
  },
  {
    name: "manuel C",
    text: "Good all around Mexican cuisine and service.",
    stars: 5,
    when: "August 2026",
  },
  {
    name: "JM Scott",
    text: "The food is delicious, however the parking is horrendous.",
    stars: 4,
    when: "August 2026",
  },
  {
    name: "Lydia",
    text: "Will definitely be going back. Food is delicious.",
    stars: 4,
    when: "July 2026",
  },
];

const RATING_BARS = [
  [5, 82],
  [4, 8],
  [3, 2],
  [2, 3],
  [1, 5],
] as const;

const HOURS = [
  ["Monday", "10:30 AM – 7:30 PM"],
  ["Tuesday", "10:30 AM – 7:30 PM"],
  ["Wednesday", "10:30 AM – 7:30 PM"],
  ["Thursday", "10:30 AM – 7:30 PM"],
  ["Friday", "10:30 AM – 8:00 PM"],
  ["Saturday", "10:00 AM – 8:00 PM"],
  ["Sunday", "10:00 AM – 7:30 PM"],
];

const NAV = [
  ["#menu", "Menu"],
  ["#reviews", "Reviews"],
  ["#photos", "Photos"],
  ["#visit", "Visit"],
];

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i <= count ? "fill-current text-primary" : "text-muted-foreground/40"}`}
        />
      ))}
    </span>
  );
}

function Index() {
  return (
    <main className="min-h-screen scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#top" className="font-display text-2xl tracking-wide text-primary">
            La Morenita Taqueria
          </a>
          <nav className="flex items-center gap-4">
            {NAV.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="hidden text-sm font-semibold text-foreground/80 transition-colors hover:text-primary sm:inline"
              >
                {label}
              </a>
            ))}
            <a
              href="tel:+12199631505"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition hover:opacity-90"
            >
              <Phone className="h-4 w-4" /> <span className="hidden sm:inline">(219) 963-1505</span>
              <span className="sm:hidden">Call</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative scroll-mt-20">
        <img
          src={heroTacos}
          alt="Street tacos at La Morenita Taqueria"
          width={1920}
          height={1080}
          className="h-[70vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-4 pb-14">
            <p
              className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
              style={{ color: "oklch(0.9 0.08 85)" }}
            >
              <Star className="h-4 w-4 fill-current" /> 4.6 · 570 Google reviews · Lake Station, IN
            </p>
            <h1 className="font-display text-6xl leading-none text-background sm:text-7xl md:text-8xl">
              Real Mexican
              <br />
              Street Tacos
            </h1>
            <p className="mt-4 max-w-md text-lg text-background/90">
              Tacos, burritos and al pastor off the trompo — the most authentic taqueria in Northwest
              Indiana.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-bold text-primary-foreground transition hover:opacity-90"
              >
                See the Full Menu
              </a>
              <a
                href="tel:+12199631505"
                className="inline-flex items-center gap-2 rounded-lg bg-background px-5 py-3 font-bold text-foreground transition hover:opacity-90"
              >
                <Phone className="h-5 w-5" /> Call to Order
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-3">
        {[
          {
            icon: Flame,
            title: "Off the Trompo",
            text: "Real al pastor carved fresh, plus carne asada, carnitas, pollo and lengua.",
          },
          {
            icon: Leaf,
            title: "Fresh Everything",
            text: "Corn tortillas, cilantro, onion and lime — simple ingredients done right.",
          },
          {
            icon: Armchair,
            title: "Eat In or Grab & Go",
            text: "Dine-in, takeout and a relaxed outdoor seating area. $10–20 per person.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-xl border border-border bg-card p-6">
            <Icon className="h-8 w-8 text-primary" />
            <h2 className="mt-3 text-2xl text-foreground">{title}</h2>
            <p className="mt-1 text-muted-foreground">{text}</p>
          </div>
        ))}
      </section>

      {/* Full menu */}
      <section id="menu" className="scroll-mt-20 bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-5xl text-foreground">The Full Menu</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Everything off the grill, the trompo and the fryer. Prices run about $10–20 per person and
            change with the market — call{" "}
            <a href="tel:+12199631505" className="font-semibold text-primary underline underline-offset-4">
              (219) 963-1505
            </a>{" "}
            for today's pricing and specials.
          </p>

          <div className="mt-10 space-y-10">
            {MENU.map((group) => (
              <div key={group.category}>
                <h3 className="border-b-2 border-primary/30 pb-2 text-3xl text-primary">
                  {group.category}
                </h3>
                {group.note && <p className="mt-2 text-sm italic text-muted-foreground">{group.note}</p>}
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div key={item.name} className="rounded-xl bg-card p-5">
                      <h4 className="text-xl font-bold text-foreground">{item.name}</h4>
                      {item.desc && <p className="text-sm text-muted-foreground">{item.desc}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-5xl text-foreground">What People Say</h2>

          <div className="mt-8 grid gap-8 md:grid-cols-[260px_1fr]">
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="font-display text-6xl leading-none text-primary">4.6</p>
              <Stars count={5} />
              <p className="mt-2 text-sm text-muted-foreground">Based on 570 Google reviews</p>
              <ul className="mt-4 space-y-1.5">
                {RATING_BARS.map(([stars, pct]) => (
                  <li key={stars} className="flex items-center gap-2 text-sm">
                    <span className="w-3 text-muted-foreground">{stars}</span>
                    <Star className="h-3 w-3 fill-current text-primary" />
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                      <span className="block h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                    </span>
                    <span className="w-9 text-right text-muted-foreground">{pct}%</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {REVIEWS.map((r) => (
                <figure key={r.name} className="rounded-xl border border-border bg-card p-5">
                  <Quote className="h-5 w-5 text-primary/50" />
                  <blockquote className="mt-2 text-foreground">{r.text}</blockquote>
                  <figcaption className="mt-3 flex items-center justify-between gap-2 text-sm">
                    <span className="font-semibold text-foreground">{r.name}</span>
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Stars count={r.stars} /> {r.when}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <a
            href="https://www.google.com/search?q=La+Morenita+Taqueria+330+Central+Ave+Lake+Station+IN+reviews"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-input bg-background px-5 py-3 font-bold text-foreground transition hover:bg-secondary"
          >
            <Star className="h-5 w-5 text-primary" /> Read all 570 reviews on Google
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section id="photos" className="scroll-mt-20 bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-16 sm:grid-cols-3">
          <img
            src={alPastor}
            alt="Al pastor on the grill"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-square w-full rounded-xl object-cover"
          />
          <img
            src={burrito}
            alt="Carne asada burrito"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-square w-full rounded-xl object-cover"
          />
          <img
            src={aguas}
            alt="Aguas frescas"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-square w-full rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="scroll-mt-20 bg-foreground text-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-5xl">Come Find Us</h2>
            <p className="mt-4 flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-background/70" />
              330 Central Ave
              <br />
              Lake Station, IN 46405
            </p>
            <p className="mt-3 flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-background/70" />
              <a href="tel:+12199631505" className="font-semibold underline underline-offset-4">
                (219) 963-1505
              </a>
            </p>
            <a
              href="https://maps.google.com/?q=La+Morenita+Taqueria+330+Central+Ave+Lake+Station+IN+46405"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-bold text-primary-foreground transition hover:opacity-90"
            >
              <MapPin className="h-5 w-5" /> Open in Google Maps
            </a>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-3xl">
              <Clock className="h-6 w-6 text-background/70" /> Hours
            </h3>
            <ul className="mt-4 divide-y divide-background/15">
              {HOURS.map(([day, time]) => (
                <li key={day} className="flex justify-between py-2.5 text-sm">
                  <span className="font-semibold">{day}</span>
                  <span className="text-background/80">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        La Morenita Taqueria · 330 Central Ave, Lake Station, IN 46405 · (219) 963-1505
      </footer>
    </main>
  );
}
