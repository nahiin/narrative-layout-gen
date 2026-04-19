import { PlaceholderImage, SectionLabel, TextBlock } from "@/components/wire/Placeholder";

const models = ["Stepsystem","Tribeca","Groove","Gravity","Sunset"];

const Living = () => (
  <div className="container py-10 space-y-12">
    <section>
      <SectionLabel>Page · Living Room Collection</SectionLabel>
      <div className="max-w-2xl space-y-3">
        <div className="h-7 w-3/4 bg-wire-placeholder" />
        <TextBlock lines={3} />
      </div>
    </section>

    <section>
      <PlaceholderImage type="Living collection hero — atmospheric room" ratio="3:1" className="aspect-[3/1]" />
    </section>

    <section>
      <SectionLabel>Block · Living Model Grid</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map(m=>(
          <div key={m} className="space-y-2">
            <PlaceholderImage type={`${m} — system shot`} ratio="4:3" className="aspect-[4/3]" />
            <p className="text-sm uppercase tracking-widest">{m}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-3">
        <SectionLabel>Block · Integration Story (Kitchen + Living)</SectionLabel>
        <TextBlock lines={5} />
      </div>
      <PlaceholderImage type="Open-plan kitchen flowing into living" ratio="4:3" className="aspect-[4/3]" />
    </section>

    <section>
      <SectionLabel>Block · Material & Finish Highlight</SectionLabel>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {["Lacquer","Open-grain wood","Matte metal","Glass"].map(m=>(
          <div key={m} className="space-y-2">
            <PlaceholderImage type={`Material · ${m}`} ratio="1:1" className="aspect-square" />
            <p className="text-xs uppercase tracking-widest">{m}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="text-center py-12 border border-wire-border">
      <p className="text-[11px] uppercase tracking-widest text-wire-muted mb-3">CTA Block</p>
      <button className="wire-box min-h-0 h-12 px-8 text-xs">Design Your Space / Book a Consultation</button>
    </section>
  </div>
);

export default Living;
