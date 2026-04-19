import { PlaceholderLogo } from "./Placeholder";

const cols = [
  { title: "Collections", items: ["Kitchens", "Living", "Accessories", "Catalogs"] },
  { title: "Company", items: ["About", "Certifications", "Magazine", "Projects"] },
  { title: "Support", items: ["Contact", "Warranty", "After-Sales", "FAQ"] },
  { title: "Connect", items: ["Newsletter", "Press", "Trade", "Careers"] },
];

const Footer = () => (
  <footer className="border-t border-wire-border bg-background mt-12">
    <div className="container py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
      <div className="col-span-2 md:col-span-1 space-y-4">
        <PlaceholderLogo label="BRAND MARK" className="w-32 h-16" />
        <p className="text-[11px] text-wire-muted uppercase tracking-widest">Footer brand block</p>
      </div>
      {cols.map((c) => (
        <div key={c.title}>
          <h4 className="text-xs uppercase tracking-widest mb-4 font-medium">{c.title}</h4>
          <ul className="space-y-2 text-xs text-wire-muted">
            {c.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t border-wire-border">
      <div className="container py-4 flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-widest text-wire-muted">
        <div>© Innov Möbel — Wireframe</div>
        <div className="flex items-center gap-2">
          {["IG", "FB", "PIN", "LIN"].map((s) => (
            <span key={s} className="wire-box min-h-0 w-7 h-7 text-[9px]">{s}</span>
          ))}
        </div>
        <div className="wire-box min-h-0 h-7 px-3 text-[10px]">EN ▾</div>
      </div>
    </div>
  </footer>
);

export default Footer;
