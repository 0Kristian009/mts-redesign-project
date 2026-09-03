# M&T systémy — website redesign

Rebuild the site in the selected "Obsidian timber" direction: dark, warm timber aesthetic with Archivo Black headings, Hind body, Burnt Sienna palette, full-width stacked sections, Slovak copy.

## Design system

- Palette (locked): cream `#f2e8d8`, sand `#e6d5ba`, sienna `#6b3a2a`, rust `#a0522d`, copper `#cd7f32`, gold `#e8c07a`, obsidian `#14100d` / `#211913`, ink `#1a1613`
- Fonts via `<link>` in `__root.tsx`: Archivo Black (display) + Hind (body)
- Tokens defined in `src/styles.css` with `@theme` (Tailwind v4 native format)

## Pages (Slovak copy, real content from current site)

1. **Home `/`** — modified hero per your note: text block on the LEFT (kicker, headline, short intro, one CTA), smaller photograph on the RIGHT instead of a full-bleed photo. Then: O nás band (founded 2003, scope, stats), Služby band (numbered list of the 6 real service areas: lepené drevené nosné konštrukcie, priehradové krokve s oceľovými platničkami, ploché strechy, kompletizačná činnosť, drevené lepené panely, obklady/dlažby/sanita), a gallery strip linking to Fotogaléria.
2. **Fotogaléria `/fotogaleria`** — dark gallery page with the mixed-size photo grid and project captions.
3. **Kontakt `/kontakt`** — real contact data from the current site: Žitná 13, 010 01 Žilina; tel +421 41 500 62 82; e-mails mtsystemy@ / statika@ / keramika@mtsystemy.sk; embedded Google Map (same location as current site) and the written driving directions from the current page.
4. Shared header (sticky, logo, nav, SK/EN/DE switcher) and footer on all pages.

## Images

Generate per the direction's placeholder prompts: hero timber/steel-joint photo, 4 gallery images (glulam interior, steel-plate joint close-up, stacked beams, flat roof detail). Saved to `src/assets/`, imported in components.

## Technical

- Routes: `src/routes/index.tsx`, `src/routes/fotogaleria.tsx`, `src/routes/kontakt.tsx`; shared header/footer components in `src/components/`
- Each route gets its own head() with Slovak title, description, og tags (no "Lovable App" defaults)
- Real company e-mails (mtsystemy@, statika@, keramika@mtsystemy.sk) — the prototype's invented addresses are replaced
- Google Maps embed using the same map as the current kontakt page
- Subtle hover states on service rows and gallery tiles; smooth scrolling; no heavy animation
- Language switcher rendered as visual affordance (SK active); EN/DE are inert links as on the current site
- Verify build passes and check the preview screenshot after implementation
