import { useParams } from "react-router-dom";
import { PlaceholderImage, SectionLabel, TextBlock } from "@/components/wire/Placeholder";

const KitchenDetail = () => {
  const { slug } = useParams();
  return (
    <div>
      <section className="container pt-8">
        <SectionLabel>Page · Kitchen Model Detail</SectionLabel>
        <p className="text-[11px] uppercase tracking-widest text-wire-muted mb-2">Breadcrumb · Kitchens / {slug}</p>
        <h1 className="text-3xl uppercase tracking-widest mb-6">{slug}</h1>
        <PlaceholderImage type="Model hero — full bleed" ratio="21:9" className="aspect-[21/9]" />
      </section>

      <section className="container py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <SectionLabel>Block · Gallery</SectionLabel>
          <div className="grid grid-cols-3 gap-3">
            {Array.from({length:6}).map((_,i)=>(
              <PlaceholderImage key={i} type={`Angle ${i+1}`} ratio="4:3" className="aspect-[4/3]" />
            ))}
          </div>
          <div className="mt-8">
            <SectionLabel>Block · Description / Features</SectionLabel>
            <TextBlock lines={6} />
          </div>
        </div>
        <aside className="space-y-6">
          <div className="border border-wire-border p-4 space-y-3">
            <p className="text-xs uppercase tracking-widest">Materials & Finishes</p>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({length:8}).map((_,i)=>(
                <div key={i} className="aspect-square wire-box min-h-0 text-[9px]">SW {i+1}</div>
              ))}
            </div>
          </div>
          <div className="border border-wire-border p-4 space-y-2">
            <p className="text-xs uppercase tracking-widest">Key Features</p>
            <TextBlock lines={4} />
          </div>
          <button className="wire-box min-h-0 h-12 w-full text-xs">CTA — Visit Showroom / Request Quote</button>
        </aside>
      </section>

      <section className="container pb-16">
        <SectionLabel>Block · Complete the Look (Accessories Cross-Sell)</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Chair","Lamp","Table","Organiser"].map(a=>(
            <div key={a} className="space-y-2">
              <PlaceholderImage type={`Accessory · ${a}`} ratio="1:1" className="aspect-square" />
              <p className="text-xs uppercase tracking-widest">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default KitchenDetail;
