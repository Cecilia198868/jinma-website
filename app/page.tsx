// app/page.tsx
import Link from "next/link";

const COMPANY = {
  name: "Jiangxi Jinma Separator Technology Co., Ltd.",
  tagline: "Engineering stability for a connected energy world.",
  subtag:
    "High-performance AGM separator materials for reliable power systems across automotive, backup power, and industrial applications.",
  founded: "Established 2004",
  site: "47.6-acre site",
  area: "30,000+ m² production space",
  capacity: "Approx. 4,500 tons annual capacity",
  location:
    "No.105 Huajian North Road, Ganzhou Economic & Technological Development Zone, Ganzhou, Jiangxi, China",
};

const CERTS = [
  { title: "ISO 9001:2015", desc: "Quality management system (AGM separator production)" },
  { title: "ISO 14001:2015", desc: "Environmental management system" },
  { title: "ISO 45001:2018", desc: "Occupational health & safety management system" },
];

const CERTIFICATES = [
  {
    type: "Quality Management System",
    standard: "ISO 9001:2015",
    certNo: "USA24Q40542R0S",
    scope: "Production of AGM separators",
    issueDate: "2024-02-19",
    validUntil: "2027-02-18",
    issuer: "Beijing Oriental Horizon Certification Center Co., Ltd.",
  },
  {
    type: "Occupational Health & Safety Management System",
    standard: "ISO 45001:2018",
    certNo: "USA24S20544R0S",
    scope:
      "Production of AGM separators and related OH&S management activities at involved sites",
    issueDate: "2024-02-19",
    validUntil: "2027-02-18",
    issuer: "Beijing Oriental Horizon Certification Center Co., Ltd.",
  },
  {
    type: "Environmental Management System",
    standard: "ISO 14001:2015",
    certNo: "USA24E40543R0S",
    scope: "Production of AGM separators and related environmental management activities",
    issueDate: "2024-02-19",
    validUntil: "2027-02-18",
    issuer: "Beijing Oriental Horizon Certification Center Co., Ltd.",
  },
  {
    type: "National High-Tech Enterprise",
    standard: "High-Tech Enterprise Certificate",
    certNo: "GR202036000316",
    scope: "Issued by provincial authorities (as provided)",
    issueDate: "2020-09-14",
    validUntil: "Valid for 3 years",
    issuer:
      "Jiangxi Provincial Department of Science & Technology / Finance Dept. / State Taxation Administration (Jiangxi)",
  },
  {
    type: "National High-Tech Enterprise",
    standard: "High-Tech Enterprise Certificate",
    certNo: "GR202436001705",
    scope: "Issued by provincial authorities (as provided)",
    issueDate: "2024-11-26",
    validUntil: "Valid for 3 years",
    issuer:
      "Jiangxi Provincial Department of Science & Technology / Finance Dept. / State Taxation Administration (Jiangxi)",
  },
];

const AWARDS = [
  {
    title: "Jiangxi “Specialized & Innovative” SME",
    org: "Jiangxi Provincial Department of Industry and Information Technology",
    date: "2021 (recognized; certificate issued Mar 2022)",
    note: "Validity: 3 years (as provided)",
  },
  {
    title: "Jiangxi “Specialized & Innovative” SME",
    org: "Jiangxi Provincial Department of Industry and Information Technology",
    date: "2024-08",
    note: "Validity: 2024-08 to 2027-08 (as provided)",
  },
  {
    title: "Excellence Quality Award",
    org: "LEOCH Battery (Leoch International Technology Co., Ltd.)",
    date: "2023-06",
    note: "Quality excellence recognition (as provided)",
  },
  {
    title: "Excellent Supplier",
    org: "KAMISAFE (Shenzhen Kangmingsheng Industrial Co., Ltd.)",
    date: "2013 (Awarded in 2014-02)",
    note: "Supplier recognition (as provided)",
  },
  {
    title: "Excellent Supplier",
    org: "LEOCH Battery",
    date: "Year not specified",
    note: "Supplier recognition (as provided)",
  },
];

const HIGHLIGHTS = [
  { k: "Founded", v: "2004" },
  { k: "Capacity", v: "4,500 t/y" },
  { k: "Site", v: "47.6 acres" },
  { k: "Facility", v: "30,000+ m²" },
];

const APPLICATIONS = [
  {
    title: "Automotive Start-Stop",
    desc: "Stable internal structure support for high-cycle operation.",
  },
  {
    title: "UPS & Data Centers",
    desc: "Designed for continuity, reliability, and predictable performance.",
  },
  {
    title: "Telecom Backup Power",
    desc: "Consistency for long-duration standby and infrastructure resilience.",
  },
  {
    title: "Industrial Standby",
    desc: "Cost-effective solutions for demanding operating conditions.",
  },
];

const CAPABILITIES = [
  {
    title: "AGM Separator Specialization",
    desc: "Focused manufacturing and process expertise within the lead-acid battery supply chain.",
  },
  {
    title: "Digitally Controlled Production",
    desc: "Process control designed to improve batch-to-batch consistency and stability.",
  },
  {
    title: "Custom Dimensions",
    desc: "Thickness range 0.50–5.0 mm; length/width tailored to client requirements.",
  },
  {
    title: "Quality-First, Service-First",
    desc: "End-to-end quality control from raw materials through production and delivery support.",
  },
];

const RECOGNITIONS = [
  {
    title: "National High-Tech Enterprise",
    desc: "Recognized in 2020 and 2024 cycles (as provided).",
  },
  {
    title: "Jiangxi “Specialized & Innovative” SME",
    desc: "Recognized in 2021 and 2024 cycles (as provided).",
  },
  {
    title: "Supplier Recognition",
    desc: "Industry acknowledgments including quality awards (as provided).",
  },
];

const PATENT_AREAS = [
  "Drying & forming systems",
  "Acid separation devices",
  "Mechanical testing equipment",
  "Precision slitting, winding & handling",
  "Process optimization mechanisms",
];

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <div className="text-xs tracking-[0.24em] uppercase text-white/60">{eyebrow}</div>
      ) : null}
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">{title}</h2>
      {desc ? <p className="mt-3 text-base md:text-lg text-white/70">{desc}</p> : null}
    </div>
  );
}

function Card({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur">
      <div className="text-lg font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{desc}</div>
    </div>
  );
}

function LogoMark({
  brand = "KINGMA",
  sub = "VAGEN",
}: {
  brand?: string;
  sub?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      {/* SVG mark */}
      <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur flex items-center justify-center">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          {/* outer ring */}
          <path
            d="M13 2.7c5.68 0 10.3 4.62 10.3 10.3S18.68 23.3 13 23.3 2.7 18.68 2.7 13 7.32 2.7 13 2.7Z"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="1.1"
          />
          {/* energy arc */}
          <path
            d="M6.2 14.2c1.3 3.6 4.8 6.1 8.8 6.1 3.4 0 6.4-1.8 8-4.6"
            stroke="rgba(56,189,248,0.85)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* fiber / layers */}
          <path
            d="M6.8 11.3h12.4"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M7.8 8.7h10.4"
            stroke="rgba(34,197,94,0.75)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.85"
          />
          {/* core dot */}
          <circle cx="13" cy="13" r="1.55" fill="rgba(255,255,255,0.85)" />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-wide text-white">
          {brand}
        </div>
        <div className="text-[11px] tracking-[0.22em] uppercase text-white/55">
          {sub}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  // “背景图”用法：SVG噪点 + 渐变光晕（不需要外部图片文件）
  const heroBg = {
    backgroundImage: `
      radial-gradient(1200px 600px at 15% 10%, rgba(56,189,248,0.25), transparent 60%),
      radial-gradient(900px 500px at 85% 20%, rgba(34,197,94,0.18), transparent 55%),
      radial-gradient(900px 600px at 55% 80%, rgba(99,102,241,0.20), transparent 60%),
      linear-gradient(180deg, rgba(2,6,23,0.92), rgba(2,6,23,0.88)),
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='.18'/%3E%3C/svg%3E")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } as const;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-4">
            <LogoMark brand="KINGMA" sub="VAGEN" />
            <div className="hidden lg:block leading-tight">
            <div className="text-xs text-white/55">{COMPANY.name}</div>
            <div className="text-xs text-white/45">AGM Separator Materials</div>
          </div>
        </div>

          <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#applications" className="hover:text-white">Applications</a>
            <a href="#capabilities" className="hover:text-white">Capabilities</a>
            <a href="#quality" className="hover:text-white">Quality</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <Link
            href="#contact"
            className="rounded-xl bg-white text-slate-950 px-4 py-2 text-sm font-semibold hover:bg-white/90"
          >
            Request a Quote
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={heroBg} className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              {COMPANY.founded} · National High-Tech Enterprise · ISO Certified
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
              {COMPANY.tagline}
            </h1>

            <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
              {COMPANY.subtag}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#capabilities"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90"
              >
                Explore Technology
              </a>
              <a
                href="#about"
                className="rounded-2xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.06]"
              >
                Company Overview
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {HIGHLIGHTS.map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur"
                >
                  <div className="text-xs text-white/60">{x.k}</div>
                  <div className="mt-1 text-lg font-semibold">{x.v}</div>
                </div>
              ))}
            </div>

            {/* Certificates & Awards (luxury-style) */}
<div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8 backdrop-blur">
  <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
    <div>
      <div className="text-xs tracking-[0.24em] uppercase text-white/60">
        Certificates & Awards
      </div>
      <div className="mt-2 text-2xl md:text-3xl font-semibold text-white">
        Proof of disciplined standards
      </div>
      <div className="mt-2 text-sm text-white/70">
        International management systems, government recognitions, and customer awards.
      </div>
    </div>
    <div className="text-xs text-white/55">
      * Details are presented as provided by the company.
    </div>
  </div>

  <div className="mt-8 grid gap-6 lg:grid-cols-2">
    {/* Left: Certificates */}
    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-white">Certificates</div>
        <div className="text-xs text-white/55">ISO · Compliance · High-Tech</div>
      </div>

      <div className="mt-5 space-y-4">
        {CERTIFICATES.map((c) => (
          <div
            key={c.certNo}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-xs tracking-[0.22em] uppercase text-white/55">
                  {c.type}
                </div>
                <div className="mt-1 text-lg font-semibold text-white">
                  {c.standard}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
                <div className="text-[10px] tracking-[0.22em] uppercase text-white/45">
                  Certificate No.
                </div>
                <div className="mt-1 font-mono text-xs text-white/85">
                  {c.certNo}
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-slate-950/40 p-3">
                <div className="text-[10px] tracking-[0.22em] uppercase text-white/45">
                  Scope
                </div>
                <div className="mt-1 text-xs text-white/75">{c.scope}</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/40 p-3">
                <div className="text-[10px] tracking-[0.22em] uppercase text-white/45">
                  Dates
                </div>
                <div className="mt-1 text-xs text-white/75">
                  Issued: <span className="font-mono">{c.issueDate}</span>
                  <br />
                  Valid: <span className="font-mono">{c.validUntil}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-white/60">
              Issuer: {c.issuer}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right: Awards */}
    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-white">Awards & Recognitions</div>
        <div className="text-xs text-white/55">Government · Customers · Industry</div>
      </div>

      <div className="mt-5 space-y-4">
        {AWARDS.map((a) => (
          <div
            key={`${a.title}-${a.date}`}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-lg font-semibold text-white">{a.title}</div>
                <div className="mt-1 text-sm text-white/70">{a.org}</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
                <div className="text-[10px] tracking-[0.22em] uppercase text-white/45">
                  Date
                </div>
                <div className="mt-1 font-mono text-xs text-white/85">{a.date}</div>
              </div>
            </div>

            {a.note ? (
              <div className="mt-3 text-xs text-white/60">{a.note}</div>
            ) : null}
          </div>
        ))}

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <div className="text-xs tracking-[0.22em] uppercase text-white/55">
            Patents (Summary)
          </div>
          <div className="mt-2 text-sm text-white/70">
            Multiple utility model patents covering drying, acid separation, testing,
            slitting, winding, and process optimization mechanisms.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            <div className="mt-8 text-xs text-white/55">
              Headquartered in Ganzhou, Jiangxi · Serving domestic leaders and selected export markets
            </div>
          </div>
        </div>

        {/* Decorative energy line */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionTitle
          eyebrow="Company"
          title="Materials behind reliable power"
          desc="A focused AGM separator manufacturer supporting power reliability across critical infrastructure."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
            <div className="text-lg font-semibold">Who we are</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {COMPANY.name} specializes in AGM separator materials. Operating in the National
              Economic & Technological Development Zone of Ganzhou, we run digitally controlled
              production lines designed for stable, repeatable performance.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Our manufacturing footprint covers {COMPANY.site} with {COMPANY.area}, delivering
              approximately {COMPANY.capacity}.
            </p>
          </div>

          <div className="grid gap-6">
            <Card
              title="Strategic Location"
              desc="Located in a major transport hub within a national-level development zone to support efficient supply and delivery."
            />
            <Card
              title="Specialization Model"
              desc="A professionalized approach focused on product, service, equipment, and market specialization for AGM separator manufacturing."
            />
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <SectionTitle
            eyebrow="Energy Applications"
            title="Powering critical infrastructure"
            desc="Designed for systems where reliability is non-negotiable."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {APPLICATIONS.map((a) => (
              <Card key={a.title} title={a.title} desc={a.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionTitle
          eyebrow="Capabilities"
          title="Precision manufacturing, engineered consistency"
          desc="From specialized production lines to custom specifications—built for stable performance at scale."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CAPABILITIES.map((c) => (
            <Card key={c.title} title={c.title} desc={c.desc} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
          <div className="text-lg font-semibold">Product specification</div>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-xs text-white/60">Thickness range</div>
              <div className="mt-1 text-base font-semibold">0.50 mm – 5.0 mm</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-xs text-white/60">Dimensions</div>
              <div className="mt-1 text-base font-semibold">Customized to client requirements</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <SectionTitle
            eyebrow="Quality"
            title="Systematic control, certified standards"
            desc="Built on internationally aligned management systems and disciplined process execution."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {CERTS.map((c) => (
              <Card key={c.title} title={c.title} desc={c.desc} />
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
              <div className="text-lg font-semibold">Recognitions</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {RECOGNITIONS.map((r) => (
                  <li key={r.title} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-sky-300/80" />
                    <div>
                      <div className="font-semibold text-white">{r.title}</div>
                      <div className="text-white/70">{r.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
              <div className="text-lg font-semibold">Innovation focus</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Continuous R&D investment supports process enhancement and product optimization, building
                technical reserves for next-generation separator materials.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {PATENT_AREAS.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 md:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-xs tracking-[0.24em] uppercase text-white/60">Contact</div>
              <h3 className="mt-3 text-2xl md:text-3xl font-semibold">
                Let’s build reliability into your next power system.
              </h3>
              <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed">
                Share your specification (thickness, dimensions, application scenario). We will respond with
                recommended material options and a production schedule.
              </p>

              <div className="mt-6 space-y-2 text-sm text-white/70">
                <div>
                  <span className="text-white/60">Address: </span>
                  {COMPANY.location}
                </div>
              </div>
            </div>

            {/* Simple contact form (front-end only) */}
            <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="grid gap-4">
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Name"
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Email"
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Company (optional)"
                />
                <textarea
                  className="min-h-[120px] w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Tell us your application, thickness, dimensions, and required quantity."
                />
                <button
                  type="button"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90"
                >
                  Send Inquiry
                </button>
                <div className="text-xs text-white/50">
                  * This form is currently front-end only. When you’re ready, I can connect it to email or a
                  backend endpoint.
                </div>
              </div>
            </form>
          </div>
        </div>

        <footer className="mt-10 border-t border-white/10 pt-8 text-xs text-white/55">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
            <div className="text-white/55">Quality Above All · Service First</div>
          </div>
        </footer>
      </section>
    </div>
  );
}