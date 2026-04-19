import { PlaceholderImage, SectionLabel, TextBlock } from "@/components/wire/Placeholder";

const categories = ["Chairs","Tables","Lighting","Internal Organisers","Decor"];

const Accessories = () => (
  <div className="container py-10 space-y-12">
    <section>
      <SectionLabel>Page · Accessories & Add-ons</SectionLabel>
      <div className="max-w-2xl space-y-3">
        <div className="h-7 w-3/4 bg-wire-placeholder" />
        <TextBlock lines={2} />
      </div>
    </section>

    <section>
      <SectionLabel>Block · Category Navigation</SectionLabel>
      <div className="flex flex-wrap gap-3">
        {categories.map(c=>(
          <span key={c} className="wire-box min-h-0 h-9 px-4 text-xs">{c}</span>
        ))}
      </div>
    </section>

    {categories.map(cat=>(
      <section key={cat}>
        <h3 className="text-xs uppercase tracking-widest mb-4 border-b border-wire-border pb-2">{cat}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({length:4}).map((_,i)=>(
            <article key={i} className="space-y-2">
              <PlaceholderImage type={`${cat} product ${i+1}`} ratio="1:1" className="aspect-square" />
              <p className="text-xs uppercase tracking-widest">Product Name</p>
              <p className="text-[10px] text-wire-muted">Pairs with: Modern · Classic</p>
              <p className="text-[10px] underline">Enquire →</p>
            </article>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default Accessories;
