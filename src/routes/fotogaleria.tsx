import { createFileRoute } from "@tanstack/react-router";

import heroTimber from "../assets/hero-timber.jpg";
import galleryInterior from "../assets/gallery-interior.jpg";
import galleryJoint from "../assets/gallery-joint.jpg";
import galleryBeams from "../assets/gallery-beams.jpg";
import galleryFlatroof from "../assets/gallery-flatroof.jpg";

export const Route = createFileRoute("/fotogaleria")({
  head: () => ({
    meta: [
      { title: "Fotogaléria — M&T systémy, Žilina" },
      {
        name: "description",
        content:
          "Fotogaléria realizovaných projektov M&T systémy — lepené drevené konštrukcie, priehradové krokve a ploché strechy zo Žiliny a okolia.",
      },
      { property: "og:title", content: "Fotogaléria — M&T systémy" },
      {
        property: "og:description",
        content:
          "Výber z dielne a stavieb: lepené drevené konštrukcie, krovové sústavy a ploché strechy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <section className="bg-obsidian text-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-copper">
              Fotogaléria
            </p>
            <h1 className="max-w-[16ch] text-balance font-display text-3xl leading-[1.02] text-cream sm:text-4xl">
              Realizované projekty
            </h1>
          </div>
          <p className="hidden max-w-[20ch] text-pretty text-sm text-sand/50 sm:block">
            Výber z dielne a stavieb v Žiline a okolí.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <figure className="md:col-span-7">
            <img
              src={galleryInterior}
              alt="Interiér strešnej konštrukcie z lepených drevených oblúkových nosníkov"
              width={1280}
              height={800}
              className="w-full rounded-lg outline-1 -outline-offset-1 outline-black/40"
            />
            <figcaption className="mt-3 text-sm text-sand/60">
              Lepené drevené konštrukcie · interiér
            </figcaption>
          </figure>
          <figure className="md:col-span-5">
            <img
              src={galleryJoint}
              alt="Detail zalisovanej oceľovej platničky na drevenej krokve"
              width={960}
              height={760}
              loading="lazy"
              className="w-full rounded-lg outline-1 -outline-offset-1 outline-black/40"
            />
            <figcaption className="mt-3 text-sm text-sand/60">
              Priehradové krokve · detail spoja
            </figcaption>
          </figure>
          <figure className="md:col-span-4">
            <img
              src={galleryBeams}
              alt="Naskladnené čerstvo hobľované lepené nosníky vo výrobnej dielni"
              width={760}
              height={960}
              loading="lazy"
              className="w-full rounded-lg outline-1 -outline-offset-1 outline-black/40"
            />
            <figcaption className="mt-3 text-sm text-sand/60">
              Výrobná dielňa · Žilina
            </figcaption>
          </figure>
          <figure className="md:col-span-8">
            <img
              src={galleryFlatroof}
              alt="Detail ploché strechy s hydroizolačnou vrstvou a atikou"
              width={1280}
              height={560}
              loading="lazy"
              className="w-full rounded-lg outline-1 -outline-offset-1 outline-black/40"
            />
            <figcaption className="mt-3 text-sm text-sand/60">
              Plochá strecha · detail atiky
            </figcaption>
          </figure>
          <figure className="md:col-span-12">
            <img
              src={heroTimber}
              alt="Lepený drevený nosník zapustený do oceľového spoja"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[21/9] w-full rounded-lg object-cover outline-1 -outline-offset-1 outline-black/40"
            />
            <figcaption className="mt-3 text-sm text-sand/60">
              Lepený nosník · montáž do oceľového spoja
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
