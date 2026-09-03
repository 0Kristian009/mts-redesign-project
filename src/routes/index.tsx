import { Link, createFileRoute } from "@tanstack/react-router";

import heroTimber from "../assets/hero-timber.jpg";
import galleryInterior from "../assets/gallery-interior.jpg";
import galleryJoint from "../assets/gallery-joint.jpg";
import galleryBeams from "../assets/gallery-beams.jpg";
import galleryFlatroof from "../assets/gallery-flatroof.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "M&T systémy — drevené konštrukcie a strechy, Žilina" },
      {
        name: "description",
        content:
          "Výroba a montáž lepených drevených nosných konštrukcií, priehradových krovov a plochých striech. Stavebno-obchodná spoločnosť zo Žiliny, od roku 2003.",
      },
      { property: "og:title", content: "M&T systémy — drevené konštrukcie a strechy, Žilina" },
      {
        property: "og:description",
        content:
          "Lepené drevené nosné konštrukcie, priehradové krokve a ploché strechy — presne a čisto, od roku 2003.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    title: "Lepené drevené nosné konštrukcie",
    text: "Výroba a montáž lepených drevených nosníkov vrátane statického posúdenia a návrhu.",
    tag: "Konštrukcia",
  },
  {
    title: "Priehradové drevené konštrukcie",
    text: "Krovové sústavy so zalisovanými oceľovými platničkami pre rýchlu a pevnú montáž.",
    tag: "Strešný systém",
  },
  {
    title: "Ploché strechy",
    text: "Realizácia plochých striech vrátane hydroizolácií, tepelných izolácií a krytín.",
    tag: "Strešná krytina",
  },
  {
    title: "Ostatná kompletizačná činnosť",
    text: "Klampiarske, vodárenské, elektroinštalačné a murárske práce v súvislosti s realizáciou.",
    tag: "Dokončenie",
  },
  {
    title: "Drevené lepené panely",
    text: "Dodávka a realizácia objektov zo systému drevených lepených panelov.",
    tag: "Konštrukcia",
  },
  {
    title: "Obklady, dlažby, sanita",
    text: "Obchodná činnosť — obklady, dlažby, sanita, doplnky a zrkadlá.",
    tag: "Obchod",
  },
];

const galleryStrip = [
  { src: galleryInterior, alt: "Interiér s lepenými drevenými nosníkmi", label: "Lepené konštrukcie" },
  { src: galleryJoint, alt: "Detail oceľovej platničky na krokve", label: "Priehradové krokve" },
  { src: galleryBeams, alt: "Naskladnené lepené nosníky v dielni", label: "Výrobná dielňa" },
  { src: galleryFlatroof, alt: "Detail ploché strechy", label: "Ploché strechy" },
];

function HomePage() {
  return (
    <>
      {/* HERO — text vľavo, fotka vpravo */}
      <section className="bg-obsidian">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-copper">
              Drevené konštrukcie &amp; strechy · Žilina
            </p>
            <h1 className="max-w-[18ch] text-balance font-display text-4xl leading-[0.95] text-cream sm:text-5xl lg:text-6xl">
              Nosné drevo, nastrihané na milimeter presne.
            </h1>
            <p className="mt-6 max-w-[52ch] text-pretty text-base leading-relaxed text-sand/70">
              Navrhujeme, vyrábame a montujeme lepené drevené nosné konštrukcie a
              realizujeme strechy — šikmé aj ploché. Od statického posúdenia až
              po klampiarske práce, všetko pod jednou strechou.
            </p>
            <Link
              to="/kontakt"
              className="mt-9 inline-flex items-center gap-3 rounded-md bg-gradient-to-br from-copper to-sienna px-6 py-3 text-sm font-semibold text-cream transition-opacity hover:opacity-90"
            >
              Kontaktujte nás
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="lg:col-span-5">
            <img
              src={heroTimber}
              alt="Lepený drevený nosník zapustený do oceľového spoja v teplom svetle dielne"
              width={1280}
              height={960}
              className="w-full rounded-xl outline-1 -outline-offset-1 outline-black/40"
            />
          </div>
        </div>
      </section>

      {/* O NÁS */}
      <section className="border-t border-sienna/10 bg-cream text-ink">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-rust">
              O nás
            </p>
            <h2 className="max-w-[16ch] text-balance font-display text-3xl leading-[1.02] text-sienna">
              Majster od roku 2003
            </h2>
          </div>
          <div className="md:col-span-8 md:border-l md:border-sienna/15 md:pl-16">
            <p className="max-w-[56ch] text-pretty text-base leading-normal text-ink/80">
              M&amp;T systémy, spol. s r.o. je súkromná stavebno-obchodná
              spoločnosť zo Žiliny. Od roku 2003 sa venujeme výrobe a montáži
              drevených nosných konštrukcií a realizácii striech — šikmých aj
              plochých — vrátane statického posúdenia, hydroizolácií, tepelných
              izolácií, strešných krytín a klampiarskych prác.
            </p>
            <p className="mt-4 max-w-[56ch] text-pretty text-base leading-normal text-ink/80">
              Okrem stavebnej činnosti prevádzkujeme aj obchod s obkladmi,
              dlažbami, sanitou a doplnkami, a dodávame objekty zo systému
              drevených lepených panelov.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-sienna/15 pt-8">
              <div>
                <p className="font-display text-3xl leading-none text-sienna">2003</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-ink/50">
                  Rok založenia
                </p>
              </div>
              <div>
                <p className="font-display text-3xl leading-none text-sienna">6</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-ink/50">
                  Oblasť činnosti
                </p>
              </div>
              <div>
                <p className="font-display text-3xl leading-none text-sienna">Žilina</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-ink/50">
                  Sídlo firmy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section className="border-t border-gold/10 bg-obsidian-2 text-cream">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-copper">
                Služby
              </p>
              <h2 className="max-w-[16ch] text-balance font-display text-3xl leading-[1.02] text-cream sm:text-4xl">
                Šesť oblastí, jedna presnosť
              </h2>
            </div>
            <p className="hidden max-w-[24ch] text-pretty text-sm text-sand/50 sm:block">
              Od konštrukcie po povrch — kompletný reťazec drevárskej práce.
            </p>
          </div>
          <ul className="border-t border-gold/15">
            {services.map((service, index) => (
              <li
                key={service.title}
                className="group grid grid-cols-12 gap-4 border-b border-gold/10 py-6 transition-colors hover:bg-obsidian/50"
              >
                <span className="col-span-2 font-display text-lg text-copper/50 transition-colors group-hover:text-copper sm:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 sm:col-span-6">
                  <h3 className="text-balance font-display text-lg text-cream">
                    {service.title}
                  </h3>
                  <p className="mt-1 max-w-[46ch] text-pretty text-sm text-sand/60">
                    {service.text}
                  </p>
                </div>
                <span className="col-span-12 text-xs uppercase tracking-[0.15em] text-sand/40 sm:col-span-5 sm:self-center sm:text-right">
                  {service.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOTOGALÉRIA — ukážka */}
      <section className="border-t border-gold/10 bg-obsidian text-cream">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-copper">
                Fotogaléria
              </p>
              <h2 className="max-w-[16ch] text-balance font-display text-3xl leading-[1.02] text-cream sm:text-4xl">
                Realizované projekty
              </h2>
            </div>
            <Link
              to="/fotogaleria"
              className="text-sm font-semibold text-copper transition-colors hover:text-gold"
            >
              Celá galéria →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryStrip.map((item) => (
              <Link key={item.label} to="/fotogaleria" className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-lg outline-1 -outline-offset-1 outline-black/40">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={640}
                    height={480}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm text-sand/60 transition-colors group-hover:text-gold">
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA na kontakt */}
      <section className="border-t border-sienna/10 bg-cream text-ink">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-center">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-rust">
              Kontakt
            </p>
            <h2 className="max-w-[18ch] text-balance font-display text-3xl leading-[1.02] text-sienna">
              Plánujete strechu alebo konštrukciu?
            </h2>
            <p className="mt-4 max-w-[48ch] text-pretty text-base text-ink/70">
              Ozvite sa nám — poradíme s návrhom, statikou aj realizáciou.
            </p>
          </div>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-3 rounded-md bg-gradient-to-br from-copper to-sienna px-6 py-3 text-sm font-semibold text-cream transition-opacity hover:opacity-90"
          >
            Kontaktné údaje
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
