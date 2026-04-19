import { PlaceholderImage, SectionLabel } from "@/components/wire/Placeholder";
import { Download } from "lucide-react";

const Catalogs = () => (
  <div className="container py-10 space-y-12">
    <section>
      <SectionLabel>Page · Catalogs</SectionLabel>
      <div className="h-8 w-1/2 bg-wire-placeholder" />
    </section>

    <section>
      <SectionLabel>Block · Current Catalogs</SectionLabel>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({length:4}).map((_,i)=>(
          <div key={i} className="space-y-3">
            <PlaceholderImage type="Catalog cover" ratio="3:4" className="aspect-[3/4]" />
            <p className="text-xs uppercase tracking-widest">Catalog {i+1} · 2025</p>
            <p className="text-[10px] text-wire-muted">Brief 1–2 sentence description.</p>
            <div className="flex items-center gap-2">
              <button className="wire-box min-h-0 h-9 px-3 text-[10px] flex items-center gap-1"><Download className="w-3 h-3"/> Download</button>
              <span className="text-[10px] text-wire-muted">EN · IT · DE</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-secondary/40 p-8 border border-wire-border">
      <SectionLabel>Block · Archive (de-emphasised)</SectionLabel>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {Array.from({length:6}).map((_,i)=>(
          <div key={i} className="space-y-2 opacity-70">
            <PlaceholderImage type={`Archive ${2024-i}`} ratio="3:4" className="aspect-[3/4]" />
            <p className="text-[10px] uppercase tracking-widest text-center">{2024-i}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Catalogs;
