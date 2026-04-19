import { Link } from "react-router-dom";
import { Search, Menu, X, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { PlaceholderImage } from "./Placeholder";

type Column = {
  heading: string;
  links: { label: string; to: string }[];
};

const bigLinks: { label: string; to: string }[] = [
  { label: "KITCHENS", to: "/kitchens" },
  { label: "LIVING", to: "/living" },
  { label: "ACCESSORIES", to: "/accessories" },
];

const columns: Column[] = [
  {
    heading: "DEALERS",
    links: [
      { label: "Italy", to: "/contact" },
      { label: "International", to: "/contact" },
      { label: "Dealer Initiatives", to: "/contact" },
    ],
  },
  {
    heading: "COMMUNICATION",
    links: [
      { label: "Magazine", to: "/magazine" },
      { label: "News", to: "/magazine" },
      { label: "Press Review", to: "/magazine" },
    ],
  },
  {
    heading: "ABOUT",
    links: [
      { label: "Company", to: "/about" },
      { label: "Awards & Recognition", to: "/about" },
      { label: "Careers", to: "/about" },
      { label: "Certifications", to: "/certifications" },
    ],
  },
  {
    heading: "CONTACT & SUPPORT",
    links: [
      { label: "Warranty", to: "/warranty" },
      { label: "After-Sales Support", to: "/warranty" },
      { label: "FAQ", to: "/warranty" },
      { label: "Maintenance Tips", to: "/warranty" },
    ],
  },
  {
    heading: "DOWNLOAD",
    links: [
      { label: "Catalogs", to: "/catalogs" },
      { label: "Price Lists", to: "/catalogs" },
    ],
  },
  {
    heading: "MORE",
    links: [
      { label: "Contact Us", to: "/contact" },
      { label: "All Links", to: "/links" },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top floating bar — transparent backdrop with centered pill */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="container relative h-20 flex items-center justify-between pointer-events-auto">
          {/* Far left: SHARE (or CLOSE when open) */}
          <div className="flex items-center text-[11px] uppercase tracking-widest">
            {open ? (
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 hover:underline"
              >
                <X className="w-4 h-4" /> Close
              </button>
            ) : (
              <button className="hidden md:flex items-center gap-2 hover:underline">
                <Share2 className="w-4 h-4" /> Share
              </button>
            )}
          </div>

          {/* Centered pill navbar */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-3 flex items-center gap-6 px-6 h-14 bg-background border border-wire-border rounded-full transition-all ${
              open ? "shadow-none" : "shadow-sm"
            }`}
            style={{ minWidth: "min(640px, 80vw)" }}
          >
            {/* Left: hamburger + search */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Menu"
                className="wire-box min-h-0 h-9 w-9 rounded-full"
              >
                {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
              <button
                aria-label="Search"
                className="wire-box min-h-0 h-9 w-9 rounded-full"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Center: logo */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex-1 flex items-center justify-center"
            >
              <span className="wire-box min-h-0 h-8 px-4 rounded-sm text-[11px] font-medium tracking-widest">
                LOGO — INNOV MÖBEL
              </span>
            </Link>

            {/* Right: featured link inside pill */}
            <Link
              to="/about"
              className="hidden md:block text-[11px] uppercase tracking-widest hover:underline whitespace-nowrap"
            >
              Green Thinking
            </Link>
          </div>

          {/* Far right: INFO */}
          <div className="flex items-center text-[11px] uppercase tracking-widest">
            <Link to="/contact" className="hidden md:block hover:underline">
              Info
            </Link>
          </div>
        </div>
      </header>

      {/* Spacer so content doesn't sit under fixed navbar */}
      <div aria-hidden className="h-20" />

      {/* Full-screen mega menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-background overflow-y-auto pt-24 pb-16">
          <div className="container grid grid-cols-12 gap-10">
            {/* LEFT — Big collection links */}
            <div className="col-span-12 lg:col-span-5">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-6">
                COLLECTIONS
              </div>
              <ul className="space-y-2">
                {bigLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block text-5xl md:text-6xl font-light tracking-tight hover:underline underline-offset-8"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Featured editorial card */}
              <div className="mt-12 grid grid-cols-2 gap-4 max-w-lg border border-wire-border p-4">
                <PlaceholderImage ratio="1:1" label="Editorial / Lifestyle" />
                <div className="flex flex-col justify-center">
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">
                    STORIES OF LIFE
                  </div>
                  <p className="text-sm leading-relaxed">
                    Our stories of life are authentic, illustrated and written.
                  </p>
                  <Link
                    to="/magazine"
                    onClick={() => setOpen(false)}
                    className="mt-3 text-xs uppercase tracking-widest hover:underline self-start"
                  >
                    Discover →
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT — Two-column grid of categorized links */}
            <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-x-10 gap-y-12">
              {columns.map((col) => (
                <div key={col.heading}>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">
                    {col.heading}
                  </div>
                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          onClick={() => setOpen(false)}
                          className="text-base hover:underline underline-offset-4"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Footer of menu */}
          <div className="container mt-16 pt-6 border-t border-wire-border flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-widest text-muted-foreground">
            <div className="flex gap-6">
              <button className="hover:underline">EN</button>
              <button className="hover:underline">IT</button>
              <button className="hover:underline">DE</button>
            </div>
            <div className="flex gap-6">
              <Link to="/links" onClick={() => setOpen(false)} className="hover:underline">
                Instagram
              </Link>
              <Link to="/links" onClick={() => setOpen(false)} className="hover:underline">
                YouTube
              </Link>
              <Link to="/links" onClick={() => setOpen(false)} className="hover:underline">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
