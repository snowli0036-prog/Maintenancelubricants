import { useState } from "react";
import { Phone, Mail, MapPin, ChevronRight, Menu, X, FlaskConical, Activity, FileSearch, GraduationCap } from "lucide-react";

const NAV_LINKS = ["Products", "Industries", "Services", "About", "Contact"];

const PRODUCTS = [
  {
    id: 1,
    name: "Industrial Gear Oils",
    grade: "ISO VG 68–1500",
    desc: "High-load gear lubricants for gearboxes, reducers, and open gear systems. Engineered for continuous heavy-duty operation under extreme pressure and wide temperature ranges.",
  },
  {
    id: 2,
    name: "Hydraulic Fluids",
    grade: "ISO VG 32–150",
    desc: "Premium mineral and biodegradable hydraulic oils for mobile and stationary systems. Delivers consistent viscosity control and anti-wear protection in precision circuits.",
  },
  {
    id: 3,
    name: "Industrial Greases",
    grade: "NLGI 0–3",
    desc: "Multi-purpose and specialty greases for bearings, couplings, and chassis components. Formulated for water resistance and long relubrication intervals in harsh environments.",
  },
  {
    id: 4,
    name: "Compressor Oils",
    grade: "ISO VG 32–220",
    desc: "Dedicated lubricants for rotary screw, reciprocating, and vane compressors. Minimises varnish and deposit formation while extending drain intervals by up to 40%.",
  },
  {
    id: 5,
    name: "Metalworking Fluids",
    grade: "Neat & Soluble",
    desc: "Cutting, grinding, and forming fluids that extend tool life, improve surface finish, and maintain a safe working environment across ferrous and non-ferrous machining.",
  },
  {
    id: 6,
    name: "Engine & Fleet Oils",
    grade: "SAE 10W-40 – 50",
    desc: "Heavy-duty diesel and gas engine oils for mining fleets, OTR equipment, and stationary power generation, meeting API CK-4 and major OEM service requirements.",
  },
];

const INDUSTRIES = [
  {
    name: "Mining & Resources",
    desc: "Longwall, dragline, crusher, conveyor, and ROM pad lubrication for underground and open-cut operations across iron ore, coal, and gold sectors.",
  },
  {
    name: "Heavy Manufacturing",
    desc: "Stamping, forging, CNC machining, and pressing lubricants supporting continuous-shift production in steel, aluminium, and fabrication plants.",
  },
  {
    name: "Marine & Offshore",
    desc: "Stern tube, deck machinery, and engine room lubricants meeting classification society requirements for coastal shipping and offshore support vessels.",
  },
  {
    name: "Transport & Logistics",
    desc: "Engine oils, gear oils, and greases for heavy commercial vehicles, semi-trailers, and large distribution fleets operating across state and interstate routes.",
  },
  {
    name: "Agriculture",
    desc: "Universal tractor transmission oils, implement hydraulic fluids, and multi-purpose greases for dryland cropping, irrigation, and livestock operations.",
  },
  {
    name: "Construction & Civil",
    desc: "Earthmoving, piling, and crane lubricants for excavators, dozers, graders, and concrete batching plant in road construction and civil infrastructure projects.",
  },
];

const SERVICES = [
  {
    Icon: FlaskConical,
    title: "Lubricant Audit & Oil Analysis",
    desc: "On-site lubrication audits combined with accredited laboratory oil analysis to identify contamination, wear metals, and fluid degradation before failures occur. Reports include actionable corrective recommendations.",
  },
  {
    Icon: Activity,
    title: "Condition Monitoring Programs",
    desc: "Scheduled sampling programs with trended exception reports and defined alarm thresholds. We maintain your asset register and generate maintenance work orders when critical limits are breached.",
  },
  {
    Icon: FileSearch,
    title: "Technical Specification Support",
    desc: "Assistance selecting the correct lubricant grade and specification for new equipment commissioning, product replacements, or consolidation programmes aimed at reducing SKU count.",
  },
  {
    Icon: GraduationCap,
    title: "On-site Application Training",
    desc: "Structured training for maintenance and operations teams covering correct handling, storage, relubrication procedures, contamination control, and safe disposal of used lubricants.",
  },
];

const CERTS = [
  { label: "ISO 9001:2015 Certified", sub: "Quality Management System" },
  { label: "NATA-Accredited Partners", sub: "Oil Analysis Laboratories" },
  { label: "Australian-Owned", sub: "Founded 2000 · Auburn NSW" },
  { label: "OEM Approvals", sub: "Caterpillar · Komatsu · Atlas Copco · Bosch Rexroth" },
];

const STATS = [
  ["25+", "Years in operation"],
  ["2,400+", "Products in range"],
  ["6", "Distribution centres"],
  ["24 hr", "Technical support line"],
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  message: string;
};

const GRID_TEXTURE: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
};

// Steel blue used for decorative elements (not a CTA)
const STEEL = "#2A4B7C";

const HEADING: React.CSSProperties = {
  fontFamily: "'Montserrat', 'Inter', sans-serif",
  fontWeight: 600,
  letterSpacing: "-0.01em",
};

const MONO: React.CSSProperties = {
  fontFamily: "'DM Mono', monospace",
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });

  const set = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background text-foreground" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, lineHeight: 1.7 }} role="main">
      {/* ── NAV ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-primary border-b border-border">
        <div className="max-w-7xl mx-auto px-6 xl:px-12 flex items-center justify-between h-[60px]">
          {/* Logo */}
          <a href="#hero" aria-label="Maintenance Lubricants Pty Ltd — return to top" className="flex items-center gap-3 shrink-0">
            <div className="w-7 h-7 flex items-center justify-center shrink-0 border border-border">
              <div className="w-3 h-3 border-[1.5px]" style={{ borderColor: STEEL }} />
            </div>
            <div className="leading-none">
              <div className="text-[11px] font-semibold tracking-[0.22em] text-foreground uppercase">
                Maintenance Lubricants
              </div>
              <div className="text-[9px] tracking-[0.18em] text-muted-foreground uppercase mt-0.5">
                Pty Ltd · Est. 2000
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA — orange only here */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase font-semibold hover:brightness-110 transition-all duration-150 shrink-0"
          >
            Request Quote <ChevronRight size={11} />
          </a>

          <button className="lg:hidden p-1 text-foreground" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="lg:hidden bg-primary border-t border-border px-6 py-5 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground"
              >
                {link}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section id="hero" className="relative bg-background overflow-hidden">
        <div className="absolute inset-0" style={GRID_TEXTURE} />
        {/* steel blue left bar */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: STEEL }} />

        <div className="relative max-w-7xl mx-auto px-6 xl:px-12 py-28 lg:py-44">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ background: STEEL }} />
              <span className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: STEEL }}>
                Australian Industrial Lubricant Supply
              </span>
            </div>

            <h1 className="text-4xl lg:text-[58px] text-foreground leading-[1.08] mb-6" style={{ ...HEADING, fontWeight: 700 }}>
              Precision Lubrication
              <br />
              <span style={{ color: STEEL }}>Solutions</span> for Industry
            </h1>

            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-lg mb-10">
              Maintenance Lubricants Pty Ltd supplies premium industrial lubricants, greases, and specialty fluids to
              mining, manufacturing, marine, and transport sectors across Australia. Backed by qualified lubrication
              engineers and same-day dispatch.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Primary CTA — orange */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 text-[10px] tracking-[0.2em] uppercase font-semibold hover:brightness-110 transition-all duration-150"
              >
                Request a Quote <ChevronRight size={11} />
              </a>
              {/* Secondary — steel outline */}
              <a
                href="#products"
                className="inline-flex items-center gap-2 border text-muted-foreground px-7 py-3.5 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-150 hover:text-foreground hover:border-foreground/30"
                style={{ borderColor: `${STEEL}60` }}
              >
                View Products
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-20 pt-10 border-t border-border grid grid-cols-2 lg:grid-cols-4 gap-10">
            {STATS.map(([value, label]) => (
              <div key={label}>
                <div
                  className="text-3xl font-semibold leading-none mb-2"
                  style={{ ...MONO, color: STEEL }}
                >
                  {value}
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────── */}
      <section id="about" className="py-24 lg:py-36 bg-primary">
        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            {/* Left copy */}
            <div className="lg:col-span-5">
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-5">
                01 — About
              </div>
              <h2 className="text-3xl lg:text-[38px] text-foreground leading-[1.15] mb-6" style={HEADING}>
                Trusted Industrial Lubricant Specialists Since 2000
              </h2>
              <div className="w-10 h-[2px] mb-8" style={{ background: STEEL }} />
              <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">
                Maintenance Lubricants Pty Ltd is an independently owned Australian company supplying premium-grade
                lubricants and specialty fluids to industrial customers nationwide. Headquartered in Auburn, New South
                Wales, we service customers across all Australian states and territories.
              </p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Our range exceeds 2,400 products from leading international manufacturers, complemented by our
                private-label industrial series. Every recommendation is made by qualified lubrication engineers with
                field experience across mining, manufacturing, and marine sectors.
              </p>
            </div>

            {/* Credential tiles */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-px bg-border">
              {CERTS.map(({ label, sub }) => (
                <div key={label} className="bg-card p-8 flex flex-col justify-between min-h-[156px]">
                  <div className="w-5 h-[2px]" style={{ background: STEEL }} />
                  <div>
                    <div className="text-[13px] font-semibold text-foreground leading-snug mb-1.5">{label}</div>
                    <div className="text-[11px] text-muted-foreground leading-snug">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ────────────────────────────────────────────── */}
      <section id="products" className="py-24 lg:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-5">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-5">
                02 — Products
              </div>
              <h2 className="text-3xl lg:text-[38px] text-foreground leading-[1.15]" style={HEADING}>
                Product Categories
              </h2>
            </div>
            <a
              href="#contact"
              className="text-[10px] tracking-[0.2em] uppercase font-medium flex items-center gap-2 hover:gap-3 transition-all duration-150 whitespace-nowrap"
              style={{ color: STEEL }}
            >
              Request Full Catalogue <ChevronRight size={11} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {PRODUCTS.map((p, i) => (
              <div
                key={p.id}
                className="bg-card group hover:bg-secondary transition-colors duration-200 p-8 flex flex-col gap-5"
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-[11px] text-muted-foreground group-hover:text-white/40 transition-colors"
                    style={MONO}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] tracking-[0.15em] uppercase bg-muted group-hover:bg-white/10 text-muted-foreground group-hover:text-white/55 px-2 py-1 transition-colors">
                    {p.grade}
                  </span>
                </div>
                <div>
                  <h3 className="text-[14px] text-foreground group-hover:text-white mb-3 transition-colors leading-snug" style={HEADING}>
                    {p.name}
                  </h3>
                  <p className="text-[12px] text-muted-foreground group-hover:text-white/55 leading-relaxed transition-colors">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-border group-hover:border-white/10 transition-colors">
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase font-medium flex items-center gap-1.5 group-hover:text-white transition-colors"
                    style={{ color: STEEL }}
                  >
                    Enquire <ChevronRight size={10} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ──────────────────────────────────────────── */}
      <section id="industries" className="py-24 lg:py-36 bg-primary">
        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          <div className="mb-14">
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-5">
              03 — Industries
            </div>
            <h2 className="text-3xl lg:text-[38px] text-foreground leading-[1.15]" style={HEADING}>
              Industry Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={ind.name}
                className="group border-t-2 border-border pt-6 transition-all duration-150"
                style={{ borderTopColor: "rgba(255,255,255,0.07)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderTopColor = STEEL)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderTopColor = "rgba(255,255,255,0.07)")}
              >
                <div
                  className="text-[11px] text-muted-foreground mb-4"
                  style={MONO}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[14px] text-foreground mb-3 group-hover:text-secondary transition-colors leading-snug" style={HEADING}>
                  {ind.name}
                </h3>
                <p className="text-[12px] text-muted-foreground leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section id="services" className="py-24 lg:py-36 bg-background relative overflow-hidden">
        <div className="absolute inset-0" style={GRID_TEXTURE} />
        <div className="relative max-w-7xl mx-auto px-6 xl:px-12">
          <div className="mb-14">
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-5">
              04 — Services
            </div>
            <h2 className="text-3xl lg:text-[38px] text-foreground leading-[1.15]" style={HEADING}>
              Technical Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {SERVICES.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-card p-10 hover:bg-muted transition-colors duration-150">
                <Icon size={20} className="mb-7" style={{ color: STEEL }} strokeWidth={1.5} />
                <h3 className="text-[14px] text-foreground mb-4 leading-snug" style={HEADING}>{title}</h3>
                <p className="text-[12px] text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-36 bg-primary">
        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
            {/* Address column */}
            <div className="lg:col-span-4">
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-5">
                05 — Contact
              </div>
              <h2 className="text-3xl lg:text-[38px] text-foreground leading-[1.15] mb-8" style={HEADING}>
                Request a Quote
              </h2>
              <div className="w-10 h-[2px] mb-10" style={{ background: STEEL }} />

              <div className="flex flex-col gap-7">
                <div className="flex items-start gap-4">
                  <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: STEEL }} strokeWidth={1.5} />
                  <div>
                    <div className="font-semibold text-foreground mb-1 text-[11px] tracking-widest uppercase">
                      Head Office
                    </div>
                    <div className="text-muted-foreground leading-relaxed text-[12px]">
                      54/323 Chisholm Rd
                      <br />
                      Auburn NSW 2144
                      <br />
                      Australia
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={15} className="mt-0.5 shrink-0" style={{ color: STEEL }} strokeWidth={1.5} />
                  <div>
                    <div className="font-semibold text-foreground mb-1 text-[11px] tracking-widest uppercase">
                      Telephone
                    </div>
                    <div className="text-muted-foreground text-[12px]">0433 452 605</div>
                    <div className="text-muted-foreground text-[12px]">Contact: Yan</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={15} className="mt-0.5 shrink-0" style={{ color: STEEL }} strokeWidth={1.5} />
                  <div>
                    <div className="font-semibold text-foreground mb-1 text-[11px] tracking-widest uppercase">
                      Email
                    </div>
                    <div className="text-muted-foreground text-[12px]">info@maintenancelubricants.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" style={{ color: STEEL }}>
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <div>
                    <div className="font-semibold text-foreground mb-1 text-[11px] tracking-widest uppercase">
                      Website
                    </div>
                    <div className="text-muted-foreground text-[12px]">www.maintenancelubricants.com</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-[9px] text-muted-foreground tracking-[0.25em] uppercase mb-1.5">ABN</div>
                    <div
                      className="text-[12px] font-semibold text-foreground"
                      style={MONO}
                    >
                      91 003 602 195
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] text-muted-foreground tracking-[0.25em] uppercase mb-1.5">
                      Business Hours
                    </div>
                    <div className="text-[11px] text-muted-foreground leading-snug">
                      Mon–Fri 7:30 am – 5:30 pm AEST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center py-20 text-center border border-border bg-card">
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-6 border-2"
                    style={{ borderColor: STEEL }}
                  >
                    <div className="w-5 h-5" style={{ background: STEEL }} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Enquiry Received</h3>
                  <p className="text-[13px] text-muted-foreground max-w-sm leading-relaxed">
                    Thank you. Our technical team will review your requirements and respond within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", company: "", email: "", phone: "", industry: "", message: "" });
                    }}
                    className="mt-8 text-[10px] tracking-[0.2em] uppercase font-medium hover:text-foreground transition-colors"
                    style={{ color: STEEL }}
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-medium tracking-[0.2em] uppercase text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="David Chen"
                      value={form.name}
                      onChange={set("name")}
                      className="w-full bg-card border border-border text-foreground text-[13px] px-4 py-3 focus:outline-none placeholder:text-muted-foreground/40 transition-colors"
                      style={{ outline: "none" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = STEEL)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-[10px] font-medium tracking-[0.2em] uppercase text-foreground mb-2">
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      placeholder="Pilbara Mining Co Pty Ltd"
                      value={form.company}
                      onChange={set("company")}
                      className="w-full bg-card border border-border text-foreground text-[13px] px-4 py-3 focus:outline-none placeholder:text-muted-foreground/40 transition-colors"
                      onFocus={(e) => (e.currentTarget.style.borderColor = STEEL)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-medium tracking-[0.2em] uppercase text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="d.chen@pilbaramining.com.au"
                      value={form.email}
                      onChange={set("email")}
                      className="w-full bg-card border border-border text-foreground text-[13px] px-4 py-3 focus:outline-none placeholder:text-muted-foreground/40 transition-colors"
                      onFocus={(e) => (e.currentTarget.style.borderColor = STEEL)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-medium tracking-[0.2em] uppercase text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+61 8 9000 0000"
                      value={form.phone}
                      onChange={set("phone")}
                      className="w-full bg-card border border-border text-foreground text-[13px] px-4 py-3 focus:outline-none placeholder:text-muted-foreground/40 transition-colors"
                      onFocus={(e) => (e.currentTarget.style.borderColor = STEEL)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
                    />
                  </div>

                  {/* Industry */}
                  <div className="md:col-span-2">
                    <label htmlFor="industry" className="block text-[10px] font-medium tracking-[0.2em] uppercase text-foreground mb-2">
                      Industry Sector
                    </label>
                    <select
                      id="industry"
                      value={form.industry}
                      onChange={set("industry")}
                      className="w-full bg-card border border-border text-foreground text-[13px] px-4 py-3 focus:outline-none transition-colors appearance-none"
                      onFocus={(e) => (e.currentTarget.style.borderColor = STEEL)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
                    >
                      <option value="">Select your industry…</option>
                      {INDUSTRIES.map((ind) => (
                        <option key={ind.name} value={ind.name}>
                          {ind.name}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-[10px] font-medium tracking-[0.2em] uppercase text-foreground mb-2">
                      Enquiry / Requirements
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Please describe your lubrication requirements, equipment types, or product specifications of interest…"
                      value={form.message}
                      onChange={set("message")}
                      className="w-full bg-card border border-border text-foreground text-[13px] px-4 py-3 focus:outline-none placeholder:text-muted-foreground/40 transition-colors resize-none"
                      onFocus={(e) => (e.currentTarget.style.borderColor = STEEL)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
                    />
                  </div>

                  {/* Submit row — orange CTA */}
                  <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-[11px] text-muted-foreground">
                      Our technical team responds within one business day.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 text-[10px] tracking-[0.2em] uppercase font-semibold hover:brightness-110 transition-all duration-150 whitespace-nowrap"
                    >
                      Submit Enquiry <ChevronRight size={11} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-background py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-6 h-6 flex items-center justify-center shrink-0 border border-border">
                <div className="w-2.5 h-2.5 border-[1.5px]" style={{ borderColor: STEEL }} />
              </div>
              <div className="leading-none">
                <div className="text-[10px] font-semibold tracking-[0.2em] text-foreground uppercase">
                  Maintenance Lubricants Pty Ltd
                </div>
                <div className="text-[9px] tracking-[0.15em] text-muted-foreground uppercase mt-0.5">
                  ABN 91 003 602 195
                </div>
              </div>
            </div>

            {/* Links */}
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
              {[...NAV_LINKS, "Privacy Policy", "SDS Library"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  aria-label={link}
                  className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Copyright */}
            <div
              className="text-[9px] text-muted-foreground tracking-wider whitespace-nowrap"
              style={MONO}
            >
              © {new Date().getFullYear()} Maintenance Lubricants Pty Ltd
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
