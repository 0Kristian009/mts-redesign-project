import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/10 bg-obsidian text-cream">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 px-5 py-12 sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded bg-gradient-to-br from-copper to-sienna font-display text-xs text-cream outline-1 -outline-offset-1 outline-black/40">
            M&amp;T
          </span>
          <span className="text-sm text-sand/60">
            M&amp;T systémy, spol. s r.o. · Žilina · od 2003
          </span>
        </div>
        <div className="flex items-center gap-5 text-[13px] text-sand/60">
          <Link to="/" className="transition-colors hover:text-gold">
            O nás
          </Link>
          <Link to="/fotogaleria" className="transition-colors hover:text-gold">
            Fotogaléria
          </Link>
          <Link to="/kontakt" className="transition-colors hover:text-gold">
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
}
