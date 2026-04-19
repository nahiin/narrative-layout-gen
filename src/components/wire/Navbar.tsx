import { Link, NavLink } from "react-router-dom";
import { Search, Globe, Menu, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { PlaceholderImage } from "./Placeholder";

type MegaColumn = {
  heading: string;
  links: { label: string; to: string }[];
};

type MegaMenu = {
  columns: MegaColumn[];
  features?: { label: string; to: string; ratio?: string }[];
};

const menus: Record<string, MegaMenu> = {
  Kitchens: {
    columns: [
      {
        heading: "By Style",
        links: [
          { label: "Modern", to: "/kitchens" },
          { label: "Classic", to: "/kitchens" },
          { label: "Transitional", to: "/kitchens" },
          { label: "View All Models", to: "/kitchens" },
        ],
      },
      {
        heading: "By Material",
        links: [
          { label: "Matt", to: "/kitchens" },
          { label: "Gloss", to: "/kitchens" },
          { label: "Wood", to: "/kitchens" },
          { label: "Glass", to: "/kitchens" },
        ],
      },
      {
        heading: "Tools",
        links: [
          { label: "Compare Models", to: "/kitchens" },
          { label: "Configure Your Kitchen", to: "/kitchens" },
          { label: "Request a Quote", to: "/contact" },
          { label: "Find a Showroom", to: "/contact" },
        ],
      },
    ],
    features: [
      { label: "Featured: Oyster Pro", to: "/kitchens/oyster-pro", ratio: "4:3" },
      { label: "New: Tulip", to: "/kitchens/tulip", ratio: "4:3" },
    ],
  },
  Living: {
    columns: [
      {
        heading: "Systems",
        links: [
          { label: "Stepsystem", to: "/living" },
          { label: "Tribeca", to: "/living" },
          { label: "Groove", to: "/living" },
          { label: "Gravity", to: "/living" },
          { label: "Sunset", to: "/living" },
        ],
      },
      {
        heading: "By Function",
        links: [
          { label: "Wall Units", to: "/living" },
          { label: "Bookcases", to: "/living" },
          { label: "TV Systems", to: "/living" },
          { label: "Sideboards", to: "/living" },
        ],
      },
      {
        heading: "Inspiration",
        links: [
          { label: "Integrated Living", to: "/living" },
          { label: "Materials & Finishes", to: "/living" },
          { label: "Book a Consultation", to: "/contact" },
        ],
      },
    ],
    features: [
      { label: "Editorial: Stepsystem", to: "/living", ratio: "4:3" },
      { label: "Lookbook: Gravity", to: "/living", ratio: "4:3" },
    ],
  },
  Accessories: {
    columns: [
      {
        heading: "Categories",
        links: [
          { label: "Chairs", to: "/accessories" },
          { label: "Tables", to: "/accessories" },
          { label: "Lighting", to: "/accessories" },
          { label: "Internal Organisers", to: "/accessories" },
          { label: "Decorative", to: "/accessories" },
        ],
      },
      {
        heading: "Pair With",
        links: [
          { label: "Kitchen Collections", to: "/kitchens" },
          { label: "Living Systems", to: "/living" },
          { label: "Complete the Look", to: "/accessories" },
        ],
      },
    ],
    features: [
      { label: "Curated: Seating", to: "/accessories", ratio: "4:3" },
    ],
  },
  Company: {
    columns: [
      {
        heading: "About",
        links: [
          { label: "Our Story", to: "/about" },
          { label: "Craftsmanship", to: "/about" },
          { label: "Factory & Production", to: "/about" },
          { label: "Leadership", to: "/about" },
        ],
      },
      {
        heading: "Quality",
        links: [
          { label: "Certifications", to: "/certifications" },
          { label: "Materials", to: "/about" },
          { label: "Made in Italy", to: "/certifications" },
        ],
      },
      {
        heading: "Editorial",
        links: [
          { label: "Magazine", to: "/magazine" },
          { label: "Catalogs", to: "/catalogs" },
        ],
      },
    ],
    features: [
      { label: "Brand Film", to: "/about", ratio: "16:9" },
    ],
  },
  Support: {
    columns: [
      {
        heading: "After-Sales",
        links: [
          { label: "Warranty", to: "/warranty" },
          { label: "Activate Warranty", to: "/warranty" },
          { label: "Submit a Claim", to: "/warranty" },
          { label: "Maintenance Tips", to: "/warranty" },
        ],
      },
      {
        heading: "Get in Touch",
        links: [
          { label: "Contact Us", to: "/contact" },
          { label: "Find a Dealer", to: "/contact" },
          { label: "Find a Showroom", to: "/contact" },
          { label: "All Links", to: "/links" },
        ],
      },
    ],
    features: [
      { label: "Showroom Locator", to: "/contact", ratio: "4:3" },
    ],
  },
};

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-background border-b border-wire-border"
      onMouseLeave={() => setOpenMenu(null)}
    >
      {/* Top utility bar */}
      <div className="border-b border-wire-border">
        <div className="container flex items-center justify-end h-8 gap-4 text-[10px] uppercase tracking-widest text-muted-foreground">
          <span className="wire-label">UTILITY BAR</span>
          <Link to="/contact" className="hover:underline">Find a Dealer</Link>
          <Link to="/catalogs" className="hover:underline">Catalogs</Link>
          <Link to="/magazine" className="hover:underline">Magazine</Link>
          <button className="flex items-center gap-1 hover:underline">
            <Globe className="w-3 h-3" /> EN
          </button>
        </div>
      </div>

      {/* Main bar */}
      <nav className="container flex items-center justify-between h-16 gap-4">
        <Link to="/" className="wire-box min-h-0 h-10 px-4" onMouseEnter={() => setOpenMenu(null)}>
          <span className="font-medium text-xs">LOGO — Innov Möbel</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1 text-xs uppercase tracking-widest h-full">
          {Object.keys(menus).map((key) => (
            <li
              key={key}
              className="h-full flex items-center"
              onMouseEnter={() => setOpenMenu(key)}
            >
              <button
                className={`flex items-center gap-1 px-4 h-full hover:underline underline-offset-4 ${
                  openMenu === key ? "underline" : ""
                }`}
              >
                {key}
                <ChevronDown className="w-3 h-3" />
              </button>
            </li>
          ))}
          <li className="h-full flex items-center" onMouseEnter={() => setOpenMenu(null)}>
            <NavLink
              to="/links"
              className={({ isActive }) =>
                `px-4 h-full flex items-center hover:underline underline-offset-4 ${
                  isActive ? "underline" : ""
                }`
              }
            >
              Links
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <button className="wire-box min-h-0 h-8 w-8" aria-label="Search">
            <Search className="w-4 h-4" />
          </button>
          <button className="wire-box min-h-0 h-8 w-8 hidden md:flex" aria-label="Language">
            <Globe className="w-4 h-4" />
          </button>
          <button
            className="wire-box min-h-0 h-8 w-8 lg:hidden"
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mega menu panel */}
      {openMenu && menus[openMenu] && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full bg-background border-t border-b border-wire-border shadow-sm"
          onMouseEnter={() => setOpenMenu(openMenu)}
        >
          <div className="container py-10">
            <div className="wire-label mb-6">MEGA MENU — {openMenu.toUpperCase()}</div>
            <div className="grid grid-cols-12 gap-8">
              {/* Columns */}
              <div className="col-span-7 grid grid-cols-3 gap-8">
                {menus[openMenu].columns.map((col) => (
                  <div key={col.heading}>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 pb-2 border-b border-wire-border">
                      {col.heading}
                    </div>
                    <ul className="space-y-2 text-sm">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            to={link.to}
                            className="hover:underline underline-offset-4 block"
                            onClick={() => setOpenMenu(null)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Featured visuals */}
              <div className="col-span-5 grid grid-cols-2 gap-4">
                {menus[openMenu].features?.map((f) => (
                  <Link
                    key={f.label}
                    to={f.to}
                    className="group block"
                    onClick={() => setOpenMenu(null)}
                  >
                    <PlaceholderImage ratio={f.ratio || "4:3"} label={f.label} />
                    <div className="text-xs uppercase tracking-widest mt-2 group-hover:underline">
                      {f.label} →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-wire-border bg-background">
          <div className="container py-6 space-y-6">
            {Object.entries(menus).map(([key, menu]) => (
              <div key={key}>
                <div className="text-xs uppercase tracking-widest font-medium mb-2">{key}</div>
                <ul className="space-y-1 pl-2">
                  {menu.columns.flatMap((c) => c.links).map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm hover:underline block py-1"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              to="/links"
              className="block text-xs uppercase tracking-widest font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Links
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
