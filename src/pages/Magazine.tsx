import { PlaceholderImage, SectionLabel, TextLine } from "@/components/wire/Placeholder";

const cats = ["All","Design","Maintenance","Style","Projects"];

const Magazine = () => (
  <div className="container py-10 space-y-12">
    <section>
      <SectionLabel>Page · Magazine / Gallery</SectionLabel>
      <div className="h-8 w-1/2 bg-wire-placeholder" />
    </section>

    <section>
      <SectionLabel>Block · Featured Article Hero</SectionLabel>
      <div className="relative">
        <PlaceholderImage type="Featured article hero" ratio="21:9" className="aspect-[21/9]" />
        <div className="mt-3 max-w-2xl space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-wire-muted">Category</p>
          <div className="h-7 w-full bg-wire-placeholder" />
          <div className="h-7 w-2/3 bg-wire-placeholder" />
        </div>
      </div>
    </section>

    <section>
      <SectionLabel>Block · Category Tabs + Search</SectionLabel>
      <div className="flex flex-wrap items-center justify-between gap-4 border-y border-wire-border py-4">
        <div className="flex flex-wrap gap-3">
          {cats.map(c=> <span key={c} className="text-xs uppercase tracking-widest border-b border-transparent hover:border-foreground pb-1 cursor-pointer">{c}</span>)}
        </div>
        <div className="wire-box min-h-0 h-9 w-56 px-3 text-[10px] justify-start">Search articles…</div>
      </div>
    </section>

    <section>
      <SectionLabel>Block · Article Grid</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({length:6}).map((_,i)=>(
          <article key={i} className="space-y-3">
            <PlaceholderImage type="Article hero" ratio="16:9" className="aspect-video" />
            <p className="text-[10px] uppercase tracking-widest text-wire-muted">Category</p>
            <TextLine width="90%" />
            <TextLine width="70%" />
            <TextLine width="50%" />
          </article>
        ))}
      </div>
    </section>

    <section className="border border-wire-border p-8 text-center">
      <SectionLabel>Block · Newsletter Sign-up (Optional)</SectionLabel>
      <p className="text-sm text-wire-muted mb-4">Subscribe to the editorial newsletter.</p>
      <div className="flex gap-2 max-w-md mx-auto">
        <div className="border border-wire-border h-10 flex-1" />
        <button className="wire-box min-h-0 h-10 px-6 text-xs">Subscribe</button>
      </div>
    </section>
  </div>
);

export default Magazine;
