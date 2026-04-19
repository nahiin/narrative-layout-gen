import { PlaceholderImage, SectionLabel, TextBlock } from "@/components/wire/Placeholder";

const Warranty = () => (
  <div className="container py-10 space-y-12">
    <section>
      <SectionLabel>Page · Warranty & After-Sales</SectionLabel>
      <PlaceholderImage type="Reassurance — kitchen in real home" ratio="3:1" className="aspect-[3/1]" />
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <SectionLabel>Block · Warranty Terms</SectionLabel>
        <TextBlock lines={6} />
      </div>
      <div>
        <SectionLabel>Block · Activation Steps</SectionLabel>
        <ol className="space-y-3">
          {["Register product","Upload purchase proof","Confirm details","Receive certificate"].map((s,i)=>(
            <li key={s} className="flex gap-3 border border-wire-border p-3">
              <span className="wire-box min-h-0 w-8 h-8 text-xs">{i+1}</span>
              <span className="text-xs uppercase tracking-widest self-center">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section>
      <SectionLabel>Block · Claim Process Flow</SectionLabel>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {["Contact","Submit","Review","Resolution","Follow-up"].map((s,i)=>(
          <div key={s} className="border border-wire-border p-4 text-center">
            <div className="text-2xl font-light">{i+1}</div>
            <div className="text-[10px] uppercase tracking-widest mt-1">{s}</div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <SectionLabel>Block · Service Request Form</SectionLabel>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-wire-border p-6">
        {["Name","Product","Purchase Date","Dealer"].map(f=>(
          <div key={f}>
            <label className="text-[10px] uppercase tracking-widest text-wire-muted">{f}</label>
            <div className="border border-wire-border h-10 mt-1" />
          </div>
        ))}
        <div className="md:col-span-2">
          <label className="text-[10px] uppercase tracking-widest text-wire-muted">Issue description</label>
          <div className="border border-wire-border h-32 mt-1" />
        </div>
        <button className="wire-box min-h-0 h-11 px-6 text-xs md:col-span-2 justify-self-start">Submit Request</button>
      </form>
    </section>

    <section>
      <SectionLabel>Block · Troubleshooting Quick Links</SectionLabel>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {["Maintenance Tips","FAQ","Contact","Find a Dealer"].map(l=>(
          <div key={l} className="wire-box min-h-0 h-16 text-xs">{l}</div>
        ))}
      </div>
    </section>
  </div>
);

export default Warranty;
