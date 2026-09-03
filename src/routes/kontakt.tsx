import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — M&T systémy, Žilina" },
      {
        name: "description",
        content:
          "M&T systémy, spol. s r.o., Žitná 13, 010 01 Žilina. Tel: +421 41 500 62 82. E-maily: mtsystemy@mtsystemy.sk, statika@mtsystemy.sk, keramika@mtsystemy.sk.",
      },
      { property: "og:title", content: "Kontakt — M&T systémy, Žilina" },
      {
        property: "og:description",
        content:
          "Žitná 13, 010 01 Žilina · tel +421 41 500 62 82 · marketing, projekty a statika, obklady a dlažby.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const emails = [
  { dept: "Marketing, strechy", address: "mtsystemy@mtsystemy.sk" },
  { dept: "Projekty a statika", address: "statika@mtsystemy.sk" },
  { dept: "Obklady a dlažby", address: "keramika@mtsystemy.sk" },
];

function ContactPage() {
  return (
    <section className="bg-cream text-ink">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-rust">
            Kontakt
          </p>
          <h1 className="max-w-[14ch] text-balance font-display text-3xl leading-[1.02] text-sienna">
            Navštívte nás v Žiline
          </h1>
          <div className="mt-10 space-y-7">
            <div className="border-t border-sienna/15 pt-4">
              <p className="mb-2 text-[11px] uppercase tracking-[0.15em] text-ink/45">
                Spoločnosť
              </p>
              <p className="text-lg font-medium text-ink">
                M &amp; T systémy, spol. s r.o.
              </p>
            </div>
            <div className="border-t border-sienna/15 pt-4">
              <p className="mb-2 text-[11px] uppercase tracking-[0.15em] text-ink/45">
                Adresa
              </p>
              <p className="text-lg font-medium text-ink">Žitná 13, 010 01 Žilina</p>
            </div>
            <div className="border-t border-sienna/15 pt-4">
              <p className="mb-2 text-[11px] uppercase tracking-[0.15em] text-ink/45">
                Telefón
              </p>
              <a
                href="tel:+421415006282"
                className="text-lg font-medium text-ink transition-colors hover:text-rust"
              >
                +421 41 500 62 82
              </a>
            </div>
            <div className="border-t border-sienna/15 pt-4">
              <p className="mb-2 text-[11px] uppercase tracking-[0.15em] text-ink/45">
                E-mail podľa oddelenia
              </p>
              <ul className="space-y-3 text-[15px]">
                {emails.map((item) => (
                  <li key={item.address}>
                    <span className="text-ink/50">{item.dept} — </span>
                    <a
                      href={`mailto:${item.address}`}
                      className="text-rust hover:underline"
                    >
                      {item.address}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="overflow-hidden rounded-lg outline-1 -outline-offset-1 outline-black/10">
            <iframe
              title="Mapa — M&T systémy, Žitná 13, Žilina"
              src="https://www.google.com/maps/d/embed?mid=1eSUcoIcqZ_xZYDyoh9LzteUYL08&hl=sk"
              className="aspect-[4/3] w-full"
              loading="lazy"
            />
          </div>
          <div className="mt-6">
            <p className="mb-2 text-[11px] uppercase tracking-[0.15em] text-ink/45">
              Kde nás nájdete
            </p>
            <p className="max-w-[52ch] text-pretty text-[15px] leading-normal text-ink/70">
              Z veľkej kruhovej križovatky na obchvate Žiliny (tzv. rondel)
              odbočte smer Závodie, Hôrky (Závodská cesta), pokračujte rovno až
              ku malému kruhovému objazdu, kde zabočte vľavo (Škultétyho ul.),
              na konci ulice zabočte vpravo (Žitná ul.) a hneď zasa vľavo do
              dvora 4-poschodovej budovy KBM (sivá brána so značkou zákaz
              vjazdu, hneď oproti je penzión „U Jakuba").
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
