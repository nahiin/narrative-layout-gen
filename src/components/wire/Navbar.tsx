import { Link, NavLink } from "react-router-dom";
import { Search, Globe, Menu } from "lucide-react";

const links = [
  { to: "/kitchens", label: "Kitchens" },
  { to: "/living", label: "Living" },
  { to: "/accessories", label: "Accessories" },
  { to: "/about", label: "About" },
  { to: "/magazine", label: "Magazine" },
  { to: "/catalogs", label: "Catalogs" },
  { to: "/certifications", label: "Certifications" },
  { to: "/warranty", label: "Support" },
  { to: "/contact", label: "Contact" },
  { to: "/links", label: "Links" },
];

const Navbar = () => (
  <header className="sticky top-0 z-50 bg-background border-b border-wire-border">
    <nav className="container flex items-center justify-between h-16 gap-4">
      <Link to="/" className="wire-box min-h-0 h-9 px-4">
        <span className="font-medium text-xs">LOGO — Innov Möbel</span>
      </Link>
      <ul className="hidden lg:flex items-center gap-5 text-xs uppercase tracking-widest">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              className={({ isActive }) =>
                `hover:underline underline-offset-4 ${isActive ? "underline" : ""}`
              }
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <button className="wire-box min-h-0 h-8 w-8" aria-label="Search"><Search className="w-4 h-4" /></button>
        <button className="wire-box min-h-0 h-8 w-8" aria-label="Language"><Globe className="w-4 h-4" /></button>
        <button className="wire-box min-h-0 h-8 w-8 lg:hidden" aria-label="Menu"><Menu className="w-4 h-4" /></button>
      </div>
    </nav>
  </header>
);

export default Navbar;
