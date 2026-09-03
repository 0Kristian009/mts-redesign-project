import { Link } from "@tanstack/react-router";

const navLinkClass =
  "text-sand/70 transition-colors hover:text-gold data-[status=active]:text-gold";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/10 bg-obsidian/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <span className="grid size-9 place-items-center rounded-md bg-gradient-to-br from-copper to-sienna font-display text-sm text-cream outline-1 -outline-offset-1 outline-black/40">
            M&amp;T
          </span>
          <span className="hidden font-display text-[15px] tracking-tight text-cream sm:block">
            M&amp;T systémy
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-[13px] font-medium md:flex">
          <Link to="/" className={navLinkClass} activeOptions={{ exact: true }}>
            O nás
          </Link>
          <Link to="/fotogaleria" className={navLinkClass}>
            Fotogaléria
          </Link>
          <Link to="/kontakt" className={navLinkClass}>
            Kontakt
          </Link>
        </nav>
        <div className="flex items-center gap-1 text-[11px] font-semibold tracking-wide">
          <span className="rounded bg-gold/15 px-2 py-1 text-cream">SK</span>
          <span className="cursor-not-allowed px-2 py-1 text-sand/40">EN</span>
          <span className="cursor-not-allowed px-2 py-1 text-sand/40">DE</span>
        </div>
      </div>
    </header>
  );
}
