import { PlaceholderLogo, SectionLabel, TextBlock } from "@/components/wire/Placeholder";

const groups = [
  { title: "Quality", certs: ["ISO 9001"] },
  { title: "Environmental", certs: ["ISO 14001","FSC"] },
  { title: "Safety", certs: ["ISO 45001"] },
  { title: "Origin", certs: ["Made in Italy"] },
  { title: "Material Standards", certs: ["CATAS / COSMOB","CARB-EPA"] },
];

const Certifications = () => (
  <div className="container py-10 space-y-12">
    <section>
      <SectionLabel>Page · Certifications</SectionLabel>
      <div className="max-w-2xl space-y-3">
        <div className="h-8 w-2/3 bg-wire-placeholder" />
        <TextBlock lines={3} />
      </div>
    </section>

    {groups.map(g=>(
      <section key={g.title} className="border-t border-wire-border pt-8">
        <h3 className="text-xs uppercase tracking-widest mb-6">{g.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {g.certs.map(c=>(
            <div key={c} className="border border-wire-border p-6 space-y-4">
              <PlaceholderLogo label={c} className="h-20" />
              <TextBlock lines={3} />
              <p className="text-[10px] uppercase tracking-widest underline">Verify on official site →</p>
              <p className="text-[10px] text-wire-muted">Valid: 2024 — 2027</p>
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default Certifications;
