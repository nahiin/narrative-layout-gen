import { Link } from "react-router-dom";
import { PlaceholderImage, SectionLabel, TextBlock } from "@/components/wire/Placeholder";

const models = ["Aretè","Carrera","Lounge","Oyster","Start Time","Tablet","Ki","Milano"];

const Kitchens = () => (
  <div className="container py-10 space-y-12">
    <section>
      <SectionLabel>Page · Kitchens Collection</SectionLabel>
      <div className="max-w-2xl space-y-3">
        <div className="h-7 w-3/4 bg-wire-placeholder" />
        <TextBlock lines={3} />
      </div>
    </section>

    <section>
      <SectionLabel>Block · Filter Bar</SectionLabel>
      <div className="border border-wire-border p-4 flex flex-wrap gap-3 text-xs uppercase tracking-widest">
        {["Style ▾","Material ▾","Finish ▾","Color ▾","Reset"].map(f=>(
          <span key={f} className="wire-box min-h-0 h-9 px-4">{f}</span>
        ))}
      </div>
    </section>

    <section>
      <SectionLabel>Block · Model Grid</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map(m=>(
          <Link to={`/kitchens/${m.toLowerCase().replace(/\s+/g,"-")}`} key={m} className="space-y-2 group">
            <PlaceholderImage type="Kitchen model signature shot" ratio="4:3" className="aspect-[4/3]" />
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-widest">{m}</p>
              <span className="text-[10px] text-wire-muted">View →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <section>
      <SectionLabel>Block · Compare / Side-by-Side Tool</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-wire-border p-6">
        {[1,2].map(i=>(
          <div key={i} className="space-y-3">
            <div className="wire-box min-h-0 h-10 text-xs">Select Model {i} ▾</div>
            <PlaceholderImage type={`Comparison model ${i}`} ratio="4:3" className="aspect-[4/3]" />
            <TextBlock lines={4} />
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Kitchens;
