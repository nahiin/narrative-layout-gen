import { PlaceholderImage, PlaceholderVideo, PlaceholderLogo, SectionLabel, TextBlock, TextLine } from "@/components/wire/Placeholder";

const Home = () => (
  <div>
    {/* Hero */}
    <section className="relative">
      <SectionLabel>Section · Full-Viewport Hero</SectionLabel>
      <div className="container">
        <PlaceholderVideo type="Cinematic kitchen / living auto-play loop" ratio="16:9" className="h-[70vh] min-h-[420px]" />
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="h-5 w-3/4 bg-wire-placeholder" />
            <div className="h-5 w-2/3 bg-wire-placeholder" />
            <p className="text-[11px] uppercase tracking-widest text-wire-muted">Tagline overlay</p>
          </div>
          <button className="wire-box min-h-0 h-11 px-6 text-xs">CTA — Explore Collections</button>
        </div>
      </div>
    </section>

    {/* Philosophy */}
    <section className="py-20 wire-section mt-12">
      <SectionLabel>Section · Brand Philosophy</SectionLabel>
      <div className="container max-w-4xl text-center space-y-4">
        <div className="h-6 w-full bg-wire-placeholder" />
        <div className="h-6 w-5/6 mx-auto bg-wire-placeholder" />
        <div className="h-6 w-3/4 mx-auto bg-wire-placeholder" />
      </div>
    </section>

    {/* Featured Collections */}
    <section className="py-16 wire-section">
      <div className="container">
        <SectionLabel>Section · Featured Collections</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Kitchen — Modern", "Kitchen — Classic", "Living — Stepsystem"].map((c) => (
            <div key={c} className="space-y-2">
              <PlaceholderImage type="Editorial collection shot" ratio="4:3" className="aspect-[4/3]" />
              <p className="text-xs uppercase tracking-widest">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Craftsmanship */}
    <section className="py-16 wire-section">
      <div className="container">
        <SectionLabel>Section · Craftsmanship Details</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Wood grain macro", "Brushed handle", "Joinery edge", "Countertop seam"].map((c) => (
            <PlaceholderImage key={c} type={c} ratio="1:1" className="aspect-square" />
          ))}
        </div>
        <div className="mt-6 max-w-2xl"><TextBlock lines={3} /></div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 wire-section">
      <div className="container">
        <SectionLabel>Section · Testimonials Carousel</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <PlaceholderImage type="Real client project photo" ratio="3:2" className="aspect-[3/2]" />
          <div className="space-y-3">
            <div className="text-3xl text-wire-muted">“</div>
            <TextBlock lines={4} />
            <p className="text-[11px] uppercase tracking-widest text-wire-muted">Name · City</p>
            <div className="flex gap-2 mt-4">
              {[0,1,2,3].map(i=> <span key={i} className="w-6 h-1 bg-wire-placeholder" />)}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Partner logos */}
    <section className="py-12 wire-section">
      <div className="container">
        <SectionLabel>Section · Partner Logos Strip</SectionLabel>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {Array.from({length:6}).map((_,i)=> <PlaceholderLogo key={i} label={`PARTNER ${i+1}`} className="h-14" />)}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-20 wire-section bg-secondary/40">
      <div className="container">
        <SectionLabel>Section · Brand Credibility Stats</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[["50+","Years"],["40","Countries"],["10k","Projects"],["98%","Satisfaction"]].map(([n,l])=>(
            <div key={l} className="border border-wire-border p-6">
              <div className="text-4xl font-light">{n}</div>
              <div className="text-[11px] uppercase tracking-widest text-wire-muted mt-2">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Editorial */}
    <section className="py-16 wire-section">
      <div className="container">
        <SectionLabel>Section · Editorial / Magazine Preview</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i=>(
            <article key={i} className="space-y-3">
              <PlaceholderImage type="Magazine article hero" ratio="16:9" className="aspect-video" />
              <p className="text-[10px] uppercase tracking-widest text-wire-muted">Category</p>
              <TextLine width="90%" />
              <TextLine width="60%" />
              <p className="text-xs underline">Read more →</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Social */}
    <section className="py-16 wire-section">
      <div className="container">
        <SectionLabel>Section · Instagram / Social Grid</SectionLabel>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {Array.from({length:6}).map((_,i)=>(
            <PlaceholderImage key={i} type="Instagram tile" ratio="1:1" className="aspect-square" />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Home;
