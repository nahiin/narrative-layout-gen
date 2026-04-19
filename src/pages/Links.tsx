import { PlaceholderLogo, SectionLabel } from "@/components/wire/Placeholder";
import { Globe, Instagram, MapPin, Mail, Phone } from "lucide-react";

const items = [
  { icon: Globe, label: "Official Website", sub: "innovmobel.com" },
  { icon: Instagram, label: "Instagram", sub: "@innovmobel" },
  { icon: MapPin, label: "Google Maps Location", sub: "Showroom HQ" },
  { icon: Mail, label: "Email", sub: "info@innovmobel.com" },
  { icon: Phone, label: "Phone", sub: "+00 000 000 000" },
];

const Links = () => (
  <div className="container py-10 max-w-xl mx-auto space-y-8">
    <section className="text-center space-y-4">
      <PlaceholderLogo label="LOGO — Innov Möbel" className="h-24 w-24 mx-auto rounded-full" />
      <SectionLabel>Page · All Links</SectionLabel>
      <div className="h-5 w-2/3 mx-auto bg-wire-placeholder" />
    </section>

    <section className="space-y-3">
      {items.map(({icon:Icon,label,sub})=>(
        <div key={label} className="border border-wire-border p-4 flex items-center gap-4 hover:bg-secondary/40 cursor-pointer">
          <Icon className="w-5 h-5 stroke-[1]" />
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest">{label}</p>
            <p className="text-[10px] text-wire-muted">{sub}</p>
          </div>
          <span className="text-xs">→</span>
        </div>
      ))}
    </section>

    <section>
      <SectionLabel>Block · Embedded Map</SectionLabel>
      <div className="wire-box min-h-[260px]">
        <div className="text-center">
          <MapPin className="w-8 h-8 mx-auto stroke-[1]" />
          <div className="mt-2">GOOGLE MAPS EMBED</div>
        </div>
      </div>
    </section>
  </div>
);

export default Links;
