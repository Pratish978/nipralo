import React, { useState } from "react";

const ORANGE = "#E07A3E";
const DARK_SLATE = "#4B5A66";
const TEXT_DARK = "#222222";
const TEXT_MUTED = "#6b7280";

/* ---------------- Reusable bits ---------------- */

function SectionEyebrow({ children }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <p
        style={{
          color: ORANGE,
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: 1,
          margin: 0,
        }}
      >
        {children[0]}
      </p>
      <div
        style={{
          width: 60,
          height: 2,
          background: ORANGE,
          margin: "8px 0",
        }}
      />
      <p
        style={{
          color: ORANGE,
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: 1,
          margin: 0,
        }}
      >
        {children[1]}
      </p>
    </div>
  );
}

function PrimaryButton({ children, style }) {
  return (
    <button
      style={{
        background: ORANGE,
        color: "#fff",
        border: "none",
        borderRadius: 6,
        padding: "14px 28px",
        fontWeight: 700,
        fontSize: 15,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        ...style,
      }}
    >
      {children}
    </button>
  );
}

/* ---------------- Hero (video version, mirrors image hero) ---------------- */

function VideoHero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: 620,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        background: "#1c1f22",
      }}
    >
      <video
        src="/pentakulvid.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.55,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "120px 64px 56px",
          maxWidth: 1100,
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: 44,
            fontWeight: 500,
            lineHeight: 1.25,
            margin: 0,
            marginBottom: 28,
          }}
        >
          Ensuring Safe Transport for Temperature-Sensitive Products
        </h1>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.4)",
            paddingTop: 24,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <p
            style={{
              color: "#f1f1f1",
              fontSize: 17,
              lineHeight: 1.5,
              margin: 0,
              maxWidth: 560,
            }}
          >
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
    <section
      style={{
        padding: "64px 64px",
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        gap: 40,
        alignItems: "start",
      }}
    >
      <SectionEyebrow>{["ABOUT", "PENTA KUHL"]}</SectionEyebrow>
      <p
        style={{
          fontSize: 19,
          lineHeight: 1.6,
          color: TEXT_DARK,
          margin: 0,
          maxWidth: 720,
        }}
      >
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
    <section
      style={{
        background: DARK_SLATE,
        padding: "72px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "#fff",
          width: 248,
          height: 200,
          borderRadius: 8,
          margin: "0 auto 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
      <h2
        style={{
          color: "#fff",
          fontWeight: 500,
          fontSize: 26,
          margin: "0 0 24px",
        }}
      >
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
    <div
      style={{
        border: "1px solid #e8e8e8",
        padding: 40,
        flex: 1,
        minWidth: 320,
      }}
    >
      <h3 style={{ fontSize: 34, fontWeight: 400, margin: "0 0 16px", color: TEXT_DARK }}>
        {data.title}
      </h3>
      <p style={{ color: TEXT_MUTED, fontSize: 15, lineHeight: 1.6, margin: "0 0 28px" }}>
        {data.blurb}
      </p>
      {data.rows.map((row) => (
        <div
          key={row.label}
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #eee",
            marginBottom: 12,
          }}
        >
          <span
            style={{
              fontWeight: 700,
              fontSize: 18,
              padding: "20px 24px",
              borderRight: "1px solid #eee",
              minWidth: 140,
            }}
          >
            {row.label}
          </span>
          {row.items.map((item) => (
            <span
              key={item}
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: 13,
                fontWeight: 600,
                color: "#444",
                padding: "12px 8px",
                borderRight: "1px solid #eee",
              }}
            >
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
    <section style={{ padding: "72px 64px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: 38,
          fontWeight: 400,
          margin: "0 0 48px",
          color: TEXT_DARK,
        }}
      >
        Product Solutions
      </h2>
      <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
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
    <section style={{ padding: "72px 64px", textAlign: "center" }}>
      <h2 style={{ fontSize: 34, fontWeight: 400, margin: "0 0 16px" }}>
        Series <span style={{ color: "#9aa0a6" }}>Guide</span>
      </h2>
      <p
        style={{
          color: TEXT_MUTED,
          maxWidth: 760,
          margin: "0 auto 40px",
          lineHeight: 1.6,
        }}
      >
        This guide outlines temperature-controlled packaging solutions
        designed for the safe transport and storage of sensitive products,
        like vaccines and biologics, across various thermal conditions, from
        refrigerated to deep-freeze.
      </p>

      <div
        style={{
          display: "flex",
          border: "1px solid #eee",
          marginBottom: 0,
        }}
      >
        {Object.keys(SERIES).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            style={{
              flex: 1,
              padding: "18px 0",
              background: "transparent",
              border: "none",
              borderRight: "1px solid #eee",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: 0.5,
              color: active === key ? ORANGE : TEXT_DARK,
            }}
          >
            {key}
          </button>
        ))}
      </div>

      <div
        style={{
          border: "1px solid #eee",
          borderTop: "none",
          textAlign: "left",
          padding: 32,
        }}
      >
        <p style={{ margin: "0 0 12px" }}>
          <strong>Temperature Range:</strong> {current.temp}
        </p>
        <p style={{ margin: "0 0 12px" }}>
          <strong>Usage &amp; Applications:</strong> {current.usage}
        </p>
        <p style={{ margin: 0 }}>
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
    <div
      style={{
        display: "flex",
        overflow: "hidden",
        borderTop: "1px solid #eee",
        borderBottom: "1px solid #eee",
      }}
    >
      <div
        style={{
          display: "flex",
          animation: `${direction === "left" ? "marqueeLeft" : "marqueeRight"} 30s linear infinite`,
        }}
      >
        {track.map((item, i) => (
          <div
            key={i}
            style={{
              padding: "28px 56px",
              borderRight: "1px solid #eee",
              fontWeight: 700,
              fontSize: 18,
              whiteSpace: "nowrap",
              color: TEXT_DARK,
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-33.333%); }
          to { transform: translateX(0); }
        }
      `}</style>
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
    <div style={{ borderBottom: "1px solid #eee" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          padding: "20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: TEXT_DARK }}>{item.q}</span>
        <span style={{ color: "#888" }}>{isOpen ? "︿" : "⌄"}</span>
      </button>
      {isOpen && (
        <p style={{ color: TEXT_MUTED, lineHeight: 1.6, margin: "0 0 20px", paddingRight: 32 }}>
          {item.a}
        </p>
      )}
    </div>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section
      style={{
        padding: "72px 64px",
        display: "grid",
        gridTemplateColumns: "1fr 1.4fr",
        gap: 48,
      }}
    >
      <div>
        <h2 style={{ fontSize: 32, fontWeight: 400, margin: "0 0 16px" }}>
          Frequently Asked <span style={{ color: "#9aa0a6" }}>Questions</span>
        </h2>
        <p style={{ color: TEXT_MUTED, lineHeight: 1.6, maxWidth: 360, margin: 0 }}>
          Explore our frequently asked questions to gain clarity about Penta
          Kuhl&rsquo;s services and features.
        </p>
      </div>
      <div style={{ borderTop: "1px solid #eee" }}>
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
    <section
      style={{
        position: "relative",
        padding: "100px 24px",
        textAlign: "center",
        color: "#fff",
        background:
          "linear-gradient(rgba(20,20,20,0.55), rgba(20,20,20,0.55)), #555 center/cover",
        backgroundImage:
          "linear-gradient(rgba(20,20,20,0.55), rgba(20,20,20,0.55)), url('https://images.unsplash.com/photo-1601583863999-65b8c3b3b9b8?q=80&w=1600&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 style={{ fontSize: 36, fontWeight: 700, margin: "0 0 16px" }}>
        Protecting What Matters Most
      </h2>
      <p style={{ fontSize: 17, margin: "0 0 32px" }}>
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
    <div style={{ fontFamily: "Segoe UI, Arial, sans-serif", color: TEXT_DARK }}>
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