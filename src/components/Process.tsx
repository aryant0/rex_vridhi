const steps = [
  { n: "01", title: "Submit Inquiry", desc: "Share your loan requirement with us." },
  { n: "02", title: "Document Verification", desc: "We review and verify your documents." },
  { n: "03", title: "Eligibility Review", desc: "Your eligibility is assessed transparently." },
  { n: "04", title: "Loan Processing", desc: "Approval and disbursal handled with care." },
];

export function Process() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-emerald uppercase tracking-widest mb-3">Loan Process</div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Simple, four-step journey</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="font-display text-5xl font-bold text-emerald/15 leading-none mb-3">{s.n}</div>
              <h3 className="font-display font-bold text-navy text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
