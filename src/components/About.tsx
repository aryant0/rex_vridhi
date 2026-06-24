import { CheckCircle2 } from "lucide-react";

const points = [
  "Customer-focused approach",
  "Transparent loan guidance",
  "Support across loan categories",
];

export function About() {
  return (
    <section id="about" className="section-pad bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.68 0.16 160) 0%, transparent 50%)" }} />
      <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs font-semibold text-emerald uppercase tracking-widest mb-3">About Vridhi Credit</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">A growing financial services company by your side</h2>
          <p className="mt-6 text-white/75 leading-relaxed">
            Vridhi Credit is focused on helping individuals and businesses explore suitable loan solutions. We work closely with each client to understand their needs and guide them toward the right financial product — with clarity, care, and a straightforward process.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-white/90">
                <CheckCircle2 className="size-5 text-emerald shrink-0" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {["Property", "Business", "Education", "Personal"].map((t) => (
            <div key={t} className="aspect-square rounded-xl bg-white/5 border border-white/10 backdrop-blur grid place-items-center p-6 hover:bg-white/10 transition-colors">
              <div className="text-center">
                <div className="text-emerald font-display font-bold text-2xl mb-1">{t}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Loans</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
