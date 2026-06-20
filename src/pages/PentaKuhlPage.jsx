import React, { useState } from "react";

const ORANGE = "#E07A3E";
const DARK_SLATE = "#4B5A66";
const TEXT_DARK = "#222222";
const TEXT_MUTED = "#6b7280";

/* ---------------- Global responsive styles ---------------- */

function PageStyles() {
  return (
    <style>{`
      .pk-page * { box-sizing: border-box; }
      .pk-page { font-family: "Segoe UI", Arial, sans-serif; color: ${TEXT_DARK}; overflow-x: hidden; }

      /* ---- Hero ---- */
      .pk-hero {
        position: relative;
        width: 100%;
        min-height: 620px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow: hidden;
        background: #1c1f22;
      }
      .pk-hero-video {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.55;
      }
      .pk-hero-inner {
        position: relative;
        z-index: 1;
        padding: 120px 64px 56px;
        max-width: 1100px;
      }
      .pk-hero-title {
        color: #fff;
        font-size: 44px;
        font-weight: 500;
        line-height: 1.25;
        margin: 0 0 28px;
      }
      .pk-hero-bottom {
        border-top: 1px solid rgba(255,255,255,0.4);
        padding-top: 24px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 24px;
      }
      .pk-hero-sub {
        color: #f1f1f1;
        font-size: 17px;
        line-height: 1.5;
        margin: 0;
        max-width: 560px;
      }

      /* ---- Buttons ---- */
      .pk-btn {
        background: ${ORANGE};
        color: #fff;
        border: none;
        border-radius: 6px;
        padding: 14px 28px;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      /* ---- Eyebrow ---- */
      .pk-eyebrow { margin-bottom: 24px; }
      .pk-eyebrow p {
        color: ${ORANGE};
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 1px;
        margin: 0;
      }
      .pk-eyebrow-line {
        width: 60px;
        height: 2px;
        background: ${ORANGE};
        margin: 8px 0;
      }

      /* ---- About ---- */
      .pk-about {
        padding: 64px 64px;
        display: grid;
        grid-template-columns: 260px 1fr;
        gap: 40px;
        align-items: start;
      }
      .pk-about p {
        font-size: 19px;
        line-height: 1.6;
        color: ${TEXT_DARK};
        margin: 0;
        max-width: 720px;
      }

      /* ---- Distributor banner ---- */
      .pk-distributor {
        background: ${DARK_SLATE};
        padding: 72px 24px;
        text-align: center;
        position: relative;
        overflow: hidden;
      }
      .pk-distributor-card {
        background: #fff;
        width: 248px;
        height: 200px;
        border-radius: 8px;
        margin: 0 auto 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .pk-distributor h2 {
        color: #fff;
        font-weight: 500;
        font-size: 26px;
        margin: 0 0 24px;
      }

      /* ---- Product Solutions ---- */
      .pk-solutions { padding: 72px 64px; }
      .pk-solutions h2 {
        text-align: center;
        font-size: 38px;
        font-weight: 400;
        margin: 0 0 48px;
        color: ${TEXT_DARK};
      }
      .pk-solutions-grid {
        display: flex;
        gap: 0;
        flex-wrap: wrap;
      }
      .pk-solution-card {
        border: 1px solid #e8e8e8;
        padding: 40px;
        flex: 1;
        min-width: 320px;
      }
      .pk-solution-card h3 {
        font-size: 34px;
        font-weight: 400;
        margin: 0 0 16px;
        color: ${TEXT_DARK};
      }
      .pk-solution-card > p {
        color: ${TEXT_MUTED};
        font-size: 15px;
        line-height: 1.6;
        margin: 0 0 28px;
      }
      .pk-solution-row {
        display: flex;
        align-items: center;
        border: 1px solid #eee;
        margin-bottom: 12px;
        flex-wrap: wrap;
      }
      .pk-solution-row-label {
        font-weight: 700;
        font-size: 18px;
        padding: 20px 24px;
        border-right: 1px solid #eee;
        min-width: 140px;
      }
      .pk-solution-row-item {
        flex: 1;
        text-align: center;
        font-size: 13px;
        font-weight: 600;
        color: #444;
        padding: 12px 8px;
        border-right: 1px solid #eee;
        min-width: 120px;
      }

      /* ---- Series Guide ---- */
      .pk-series { padding: 72px 64px; text-align: center; }
      .pk-series h2 { font-size: 34px; font-weight: 400; margin: 0 0 16px; }
      .pk-series-desc {
        color: ${TEXT_MUTED};
        max-width: 760px;
        margin: 0 auto 40px;
        line-height: 1.6;
      }
      .pk-series-tabs {
        display: flex;
        border: 1px solid #eee;
        margin-bottom: 0;
        flex-wrap: wrap;
      }
      .pk-series-tab {
        flex: 1;
        padding: 18px 0;
        background: transparent;
        border: none;
        border-right: 1px solid #eee;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.5px;
        color: ${TEXT_DARK};
        min-width: 120px;
      }
      .pk-series-tab.active { color: ${ORANGE}; }
      .pk-series-panel {
        border: 1px solid #eee;
        border-top: none;
        text-align: left;
        padding: 32px;
      }
      .pk-series-panel p { margin: 0 0 12px; }
      .pk-series-panel p:last-child { margin: 0; }

      /* ---- Marquee ---- */
      .pk-marquee {
        display: flex;
        overflow: hidden;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
      }
      .pk-marquee-track { display: flex; }
      .pk-marquee-item {
        padding: 28px 56px;
        border-right: 1px solid #eee;
        font-weight: 700;
        font-size: 18px;
        white-space: nowrap;
        color: ${TEXT_DARK};
      }
      .pk-marquee-left .pk-marquee-track { animation: marqueeLeft 30s linear infinite; }
      .pk-marquee-right .pk-marquee-track { animation: marqueeRight 30s linear infinite; }
      @keyframes marqueeLeft {
        from { transform: translateX(0); }
        to { transform: translateX(-33.333%); }
      }
      @keyframes marqueeRight {
        from { transform: translateX(-33.333%); }
        to { transform: translateX(0); }
      }

      /* ---- FAQ ---- */
      .pk-faq {
        padding: 72px 64px;
        display: grid;
        grid-template-columns: 1fr 1.4fr;
        gap: 48px;
      }
      .pk-faq h2 { font-size: 32px; font-weight: 400; margin: 0 0 16px; }
      .pk-faq-intro p { color: ${TEXT_MUTED}; line-height: 1.6; max-width: 360px; margin: 0; }
      .pk-faq-list { border-top: 1px solid #eee; }
      .pk-faq-item { border-bottom: 1px solid #eee; }
      .pk-faq-question {
        width: 100%;
        background: transparent;
        border: none;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        text-align: left;
      }
      .pk-faq-question span:first-child { font-weight: 700; font-size: 16px; color: ${TEXT_DARK}; }
      .pk-faq-question span:last-child { color: #888; }
      .pk-faq-answer {
        color: ${TEXT_MUTED};
        line-height: 1.6;
        margin: 0 0 20px;
        padding-right: 32px;
      }

      /* ---- Contact CTA ---- */
      .pk-contact {
        position: relative;
        padding: 100px 24px;
        text-align: center;
        color: #fff;
        background-image: linear-gradient(rgba(20,20,20,0.55), rgba(20,20,20,0.55)),
          url('https://images.unsplash.com/photo-1601583863999-65b8c3b3b9b8?q=80&w=1600&auto=format&fit=crop');
        background-size: cover;
        background-position: center;
      }
      .pk-contact h2 { font-size: 36px; font-weight: 700; margin: 0 0 16px; }
      .pk-contact p { font-size: 17px; margin: 0 0 32px; }

      /* =====================================================
         RESPONSIVE BREAKPOINTS
      ===================================================== */

      /* Tablet */
      @media (max-width: 900px) {
        .pk-hero-inner { padding: 90px 40px 40px; }
        .pk-hero-title { font-size: 34px; }
        .pk-about,
        .pk-solutions,
        .pk-series,
        .pk-faq { padding: 56px 40px; }
        .pk-about { grid-template-columns: 1fr; gap: 16px; }
        .pk-faq { grid-template-columns: 1fr; gap: 24px; }
        .pk-solution-card { min-width: 280px; }
        .pk-marquee-item { padding: 22px 36px; font-size: 16px; }
      }

      /* Mobile */
      @media (max-width: 600px) {
        .pk-hero { min-height: 480px; }
        .pk-hero-inner { padding: 64px 20px 28px; max-width: 100%; }
        .pk-hero-title { font-size: 26px; margin-bottom: 18px; }
        .pk-hero-bottom { flex-direction: column; align-items: flex-start; gap: 16px; }
        .pk-hero-sub { font-size: 15px; max-width: 100%; }

        .pk-about,
        .pk-distributor,
        .pk-solutions,
        .pk-series,
        .pk-faq,
        .pk-contact { padding: 40px 20px; }

        .pk-about p { font-size: 16px; }

        .pk-distributor-card { width: 200px; height: 160px; }
        .pk-distributor h2 { font-size: 20px; }

        .pk-solutions h2 { font-size: 28px; margin-bottom: 32px; }
        .pk-solutions-grid { flex-direction: column; }
        .pk-solution-card { min-width: 100%; padding: 28px; }
        .pk-solution-card h3 { font-size: 26px; }
        .pk-solution-row { flex-direction: column; align-items: stretch; }
        .pk-solution-row-label {
          border-right: none;
          border-bottom: 1px solid #eee;
          min-width: 0;
        }
        .pk-solution-row-item { border-right: none; border-bottom: 1px solid #eee; }
        .pk-solution-row-item:last-child { border-bottom: none; }

        .pk-series h2 { font-size: 26px; }
        .pk-series-tabs { flex-direction: column; }
        .pk-series-tab {
          border-right: none;
          border-bottom: 1px solid #eee;
          min-width: 0;
        }
        .pk-series-tab:last-child { border-bottom: none; }
        .pk-series-panel { padding: 22px; }

        .pk-marquee-item { padding: 16px 24px; font-size: 14px; }

        .pk-faq h2 { font-size: 26px; }
        .pk-faq-question span:first-child { font-size: 15px; }
        .pk-faq-answer { padding-right: 8px; }

        .pk-contact h2 { font-size: 26px; }
        .pk-contact p { font-size: 15px; }

        .pk-btn { padding: 12px 22px; font-size: 14px; }
      }

      /* Respect reduced motion preference */
      @media (prefers-reduced-motion: reduce) {
        .pk-marquee-left .pk-marquee-track,
        .pk-marquee-right .pk-marquee-track {
          animation: none;
        }
      }
    `}</style>
  );
}

/* ---------------- Reusable bits ---------------- */

function SectionEyebrow({ children }) {
  return (
    <div className="pk-eyebrow">
      <p>{children[0]}</p>
      <div className="pk-eyebrow-line" />
      <p>{children[1]}</p>
    </div>
  );
}

function PrimaryButton({ children, className = "", ...rest }) {
  return (
    <button className={`pk-btn ${className}`} {...rest}>
      {children}
    </button>
  );
}

/* ---------------- Hero (video version, mirrors image hero) ---------------- */

function VideoHero() {
  return (
    <section className="pk-hero">
      <video
        className="pk-hero-video"
        src="/pentakulvid.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="pk-hero-inner">
        <h1 className="pk-hero-title">
          Ensuring Safe Transport for Temperature-Sensitive Products
        </h1>
        <div className="pk-hero-bottom">
          <p className="pk-hero-sub">
            Explore our frequently asked questions to gain clarity about
            Penta Kuhl&rsquo;s services and features
          </p>
          <PrimaryButton>
            Explore <span aria-hidden>⌄</span>
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function AboutSection() {
  return (
    <section className="pk-about">
      <SectionEyebrow>{["ABOUT", "PENTA KUHL"]}</SectionEyebrow>
      <p>
        At <strong>Pentakuhl</strong>, we specialize in providing durable,
        effective packaging solutions that maintain temperature{" "}
        <strong>stability</strong> during transit, <strong>protecting</strong>{" "}
        your valuable products. Our innovative designs cater to various
        industries, including pharmaceuticals, food, and biotechnology.
      </p>
    </section>
  );
}

/* ---------------- Distributor banner ---------------- */

function DistributorBanner() {
  return (
    <section className="pk-distributor">
      <div className="pk-distributor-card">
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 40 }}>❄️</div>
          <p style={{ color: ORANGE, fontWeight: 700, margin: "4px 0 0", fontSize: 13 }}>
            PELI
          </p>
          <p style={{ color: "#1d4e6b", fontWeight: 800, margin: 0, fontSize: 18 }}>
            BIOTHERMAL™
          </p>
        </div>
      </div>
      <h2>
        Authorized Distributors for Pelican BioThermal<sup>tm</sup> Products
      </h2>
      <PrimaryButton>Read more</PrimaryButton>
    </section>
  );
}

/* ---------------- Product Solutions ---------------- */

const SOLUTIONS = [
  {
    title: "Parcel Shippers",
    blurb:
      "We understand the unique challenges faced by parcel shippers and offer tailored solutions for seamless shipping.",
    rows: [
      { label: "Single Use", items: ["COOLGUARD PCM", "COOLGUARD ADVANCE"] },
      { label: "Reusable", items: ["Crēdo Cube"] },
    ],
    cta: "Parcel Shippers",
  },
  {
    title: "Pallet Shippers",
    blurb:
      "We provide tailored services for pallet shippers, ensuring your cargo arrives safely and efficiently.",
    rows: [
      { label: "Single Use", items: ["COOLPALL VERTOS", "COOLPALL VERTOS ADVANCE"] },
      { label: "Reusable", items: ["Crēdo Xtreme", "Crēdo Cargo"] },
    ],
    cta: "Pallet Shippers",
  },
];

function SolutionCard({ data }) {
  return (
    <div className="pk-solution-card">
      <h3>{data.title}</h3>
      <p>{data.blurb}</p>
      {data.rows.map((row) => (
        <div className="pk-solution-row" key={row.label}>
          <span className="pk-solution-row-label">{row.label}</span>
          {row.items.map((item) => (
            <span className="pk-solution-row-item" key={item}>
              {item}
            </span>
          ))}
        </div>
      ))}
      <PrimaryButton style={{ marginTop: 16, opacity: 0.9 }}>{data.cta}</PrimaryButton>
    </div>
  );
}

function ProductSolutions() {
  return (
    <section className="pk-solutions">
      <h2>Product Solutions</h2>
      <div className="pk-solutions-grid">
        {SOLUTIONS.map((s) => (
          <SolutionCard key={s.title} data={s} />
        ))}
      </div>
    </section>
  );
}

/* ---------------- Series Guide ---------------- */

const SERIES = {
  "SERIES 4": {
    temp: "+2°C to +8°C",
    usage: "Maintains standard refrigerated temperatures.",
    idealFor: "Ideal for vaccines and standard pharmaceuticals.",
  },
  "SERIES 22": {
    temp: "+15°C to +25°C",
    usage: "Maintains controlled room temperature.",
    idealFor: "Ideal for ambient-stable medications.",
  },
  "SERIES 20M": {
    temp: "-20°C",
    usage: "Maintains sub-zero temperatures for more sensitive items.",
    idealFor: "Ideal for frozen vaccines and biologics.",
  },
  "SERIES 50M": {
    temp: "-50°C",
    usage: "Used for extreme cold chain products.",
    idealFor: "Ideal for advanced biologics and special pharmaceuticals.",
  },
};

function SeriesGuide() {
  const [active, setActive] = useState("SERIES 20M");
  const current = SERIES[active];

  return (
    <section className="pk-series">
      <h2>
        Series <span style={{ color: "#9aa0a6" }}>Guide</span>
      </h2>
      <p className="pk-series-desc">
        This guide outlines temperature-controlled packaging solutions
        designed for the safe transport and storage of sensitive products,
        like vaccines and biologics, across various thermal conditions, from
        refrigerated to deep-freeze.
      </p>

      <div className="pk-series-tabs">
        {Object.keys(SERIES).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`pk-series-tab ${active === key ? "active" : ""}`}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="pk-series-panel">
        <p>
          <strong>Temperature Range:</strong> {current.temp}
        </p>
        <p>
          <strong>Usage &amp; Applications:</strong> {current.usage}
        </p>
        <p>
          <strong>Ideal For:</strong> {current.idealFor}
        </p>
      </div>
    </section>
  );
}

/* ---------------- Marquee strips ---------------- */

function Marquee({ items, direction = "left" }) {
  const track = [...items, ...items, ...items];
  return (
    <div className={`pk-marquee pk-marquee-${direction}`}>
      <div className="pk-marquee-track">
        {track.map((item, i) => (
          <div className="pk-marquee-item" key={i}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function MarqueeStrips() {
  return (
    <>
      <Marquee
        direction="left"
        items={["Tailored Freight Solutions", "Robust Load Security", "Expert Logistics Support"]}
      />
      <Marquee
        direction="right"
        items={["End-to-End Supply Chain Management", "Flexible Shipping Schedules", "Volume Discounts"]}
      />
    </>
  );
}

/* ---------------- FAQ ---------------- */

const FAQS = [
  {
    q: "What is Penta Kuhl?",
    a: "Penta Kuhl is an innovative logistics solution that integrates technology to optimize supply chain management and enhance efficiency.",
  },
  {
    q: "How does Penta Kuhl ensure cargo safety?",
    a: "We utilize advanced tracking systems, secure storage facilities, and stringent handling protocols to ensure the safety of your cargo.",
  },
  {
    q: "What types of cargo can Penta Kuhl handle?",
    a: "Penta Kuhl is equipped to manage various cargo types, including perishable goods, heavy equipment, and general freight.",
  },
  {
    q: "Is there customer support available for Penta Kuhl users?",
    a: "Yes, our dedicated customer support team is available to assist you with any inquiries or issues regarding our services.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="pk-faq-item">
      <button className="pk-faq-question" onClick={onToggle}>
        <span>{item.q}</span>
        <span>{isOpen ? "︿" : "⌄"}</span>
      </button>
      {isOpen && <p className="pk-faq-answer">{item.a}</p>}
    </div>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="pk-faq">
      <div className="pk-faq-intro">
        <h2>
          Frequently Asked <span style={{ color: "#9aa0a6" }}>Questions</span>
        </h2>
        <p>
          Explore our frequently asked questions to gain clarity about Penta
          Kuhl&rsquo;s services and features.
        </p>
      </div>
      <div className="pk-faq-list">
        {FAQS.map((item, i) => (
          <FaqItem
            key={item.q}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}

/* ---------------- Contact CTA ---------------- */

function ContactSection() {
  return (
    <section className="pk-contact">
      <h2>Protecting What Matters Most</h2>
      <p>
        Get in touch to ensure safe and temperature-stable transit for your
        sensitive products.
      </p>
      <PrimaryButton>Contact Us Today</PrimaryButton>
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function PentaKuhlPage() {
  return (
    <div className="pk-page">
      <PageStyles />
      <VideoHero />
      <AboutSection />
      <DistributorBanner />
      <ProductSolutions />
      <SeriesGuide />
      <MarqueeStrips />
      <FaqSection />
      <ContactSection />
    </div>
  );
}