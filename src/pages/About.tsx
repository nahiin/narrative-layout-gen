import { PlaceholderImage, PlaceholderVideo, PlaceholderLogo, SectionLabel, TextBlock } from "@/components/wire/Placeholder";

const About = () => (
  <div className="container py-10 space-y-16">
    <section>
      <SectionLabel>Page · About Company</SectionLabel>
      <div className="max-w-3xl space-y-4">
        <div className="h-9 w-2/3 bg-wire-placeholder" />
        <TextBlock lines={4} />
      </div>
    </section>

    <section>
      <SectionLabel>Block · Brand Heritage</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <PlaceholderImage type="Archival / heritage photo" ratio="4:3" className="aspect-[4/3]" />
        <TextBlock lines={6} />
      </div>
    </section>

    <section className="py-12 border-y border-wire-border text-center">
      <SectionLabel>Block · Mission Statement (Typographic)</SectionLabel>
      <div className="max-w-3xl mx-auto space-y-3">
        <div className="h-7 w-full bg-wire-placeholder" />
        <div className="h-7 w-5/6 mx-auto bg-wire-placeholder" />
      </div>
    </section>

    <section>
      <SectionLabel>Block · Brand Film</SectionLabel>
      <PlaceholderVideo type="Corporate film 2–4 min" ratio="16:9" className="aspect-video" />
    </section>

    <section>
      <SectionLabel>Block · Factory & Production</SectionLabel>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {["CNC line","Press","Lacquer bay","Warehouse","Inspection","Packing","Loading","Showroom"].map(f=>(
          <PlaceholderImage key={f} type={f} ratio="4:3" className="aspect-[4/3]" />
        ))}
      </div>
    </section>

    <section>
      <SectionLabel>Block · Behind the Scenes (Process Sequence)</SectionLabel>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
        {Array.from({length:12}).map((_,i)=>(
          <PlaceholderImage key={i} type={`Step ${i+1}`} ratio="1:1" className="aspect-square" />
        ))}
      </div>
    </section>

    <section>
      <SectionLabel>Block · Artisan Portraits</SectionLabel>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Marco","Elena","Luca","Sofia"].map(n=>(
          <div key={n} className="space-y-2">
            <PlaceholderImage type="Artisan at work" ratio="3:4" className="aspect-[3/4]" />
            <p className="text-xs uppercase tracking-widest text-center">{n}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <SectionLabel>Block · Quality & Certifications</SectionLabel>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {["ISO 9001","ISO 14001","ISO 45001","FSC","Made in Italy","CARB-EPA"].map(c=>(
          <PlaceholderLogo key={c} label={c} className="h-16" />
        ))}
      </div>
    </section>

    <section>
      <SectionLabel>Block · Leadership (Optional)</SectionLabel>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1,2,3,4].map(i=>(
          <div key={i} className="space-y-2">
            <PlaceholderImage type="Leadership headshot" ratio="1:1" className="aspect-square" />
            <p className="text-xs uppercase tracking-widest">Name</p>
            <p className="text-[10px] text-wire-muted">Role</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
