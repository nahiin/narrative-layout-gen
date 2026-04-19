import { PlaceholderImage, SectionLabel, TextBlock } from "@/components/wire/Placeholder";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => (
  <div>
    <section className="container pt-10">
      <SectionLabel>Page · Contact</SectionLabel>
      <PlaceholderImage type="Showroom interior — warm welcome" ratio="3:1" className="aspect-[3/1]" />
    </section>

    <section className="container py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <SectionLabel>Block · General Contact Form</SectionLabel>
        <p className="text-sm text-wire-muted mb-6">We would love to hear from you.</p>
        <form className="space-y-4">
          {["Name","Email","Subject"].map(f=>(
            <div key={f}>
              <label className="text-[10px] uppercase tracking-widest text-wire-muted">{f}</label>
              <div className="border border-wire-border h-10 mt-1" />
            </div>
          ))}
          <div>
            <label className="text-[10px] uppercase tracking-widest text-wire-muted">Message</label>
            <div className="border border-wire-border h-32 mt-1" />
          </div>
          <button className="wire-box min-h-0 h-11 px-6 text-xs">Send Message</button>
        </form>
      </div>

      <div className="space-y-6">
        <SectionLabel>Block · Departments</SectionLabel>
        {["Sales","Customer Service","Trade Enquiries"].map(d=>(
          <div key={d} className="border border-wire-border p-4 space-y-2">
            <p className="text-xs uppercase tracking-widest">{d}</p>
            <div className="flex items-center gap-2 text-xs text-wire-muted"><Phone className="w-3 h-3" /> +00 000 000 000</div>
            <div className="flex items-center gap-2 text-xs text-wire-muted"><Mail className="w-3 h-3" /> dept@innovmobel.com</div>
          </div>
        ))}
      </div>
    </section>

    <section className="container pb-12">
      <SectionLabel>Block · Showroom & Dealer Locator (Map + List)</SectionLabel>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 border border-wire-border">
        <div className="lg:col-span-2 wire-box min-h-[400px]">
          <div className="text-center">
            <MapPin className="w-10 h-10 mx-auto stroke-[1]" />
            <div className="mt-2">INTERACTIVE MAP</div>
            <div className="text-[9px] mt-1 normal-case">Google Maps / Mapbox with branded pins</div>
          </div>
        </div>
        <div className="border-l border-wire-border max-h-[400px] overflow-auto">
          {Array.from({length:6}).map((_,i)=>(
            <div key={i} className="p-4 border-b border-wire-border">
              <p className="text-xs uppercase tracking-widest">Showroom {i+1}</p>
              <p className="text-[11px] text-wire-muted mt-1">Address line · City</p>
              <p className="text-[10px] underline mt-2">Get directions →</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container pb-16">
      <SectionLabel>Block · Support Quick Links</SectionLabel>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[["Warranty",MessageCircle],["After-Sales",Phone],["Maintenance",Mail],["FAQ",MessageCircle]].map(([l,Icon]:any)=>(
          <div key={l} className="border border-wire-border p-6 text-center space-y-2">
            <Icon className="w-6 h-6 mx-auto stroke-[1]" />
            <p className="text-xs uppercase tracking-widest">{l}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Contact;
