import { Eye, HeartHandshake, Zap, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: Eye, title: "Transparent Process", desc: "Clear terms and honest communication at every step." },
  { icon: HeartHandshake, title: "Personalized Assistance", desc: "Solutions tailored to your individual situation." },
  { icon: Zap, title: "Quick Response", desc: "Prompt support from inquiry through processing." },
  { icon: ShieldCheck, title: "Trusted Service", desc: "Reliable guidance you can count on." },
];

export function WhyChoose() {
  return (
    <section className="section-pad bg-muted">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-emerald uppercase tracking-widest mb-3">Why Choose Us</div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Built on trust and service</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="p-6 rounded-xl bg-white border border-border">
              <div className="size-11 rounded-lg bg-gold/15 grid place-items-center mb-5">
                <r.icon className="size-5 text-gold" />
              </div>
              <h3 className="font-display font-bold text-navy mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
