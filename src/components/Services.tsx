import { Home, Briefcase, GraduationCap, User } from "lucide-react";

const services = [
  { icon: Home, title: "Loan Against Property", desc: "Unlock the value of your property for financial needs." },
  { icon: Briefcase, title: "Business Loan", desc: "Flexible financing solutions for business growth." },
  { icon: GraduationCap, title: "Education Loan", desc: "Support your educational goals with financing options." },
  { icon: User, title: "Personal Loan", desc: "Quick financial assistance for personal requirements." },
];

export function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-emerald uppercase tracking-widest mb-3">Our Services</div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Loan options tailored to your needs</h2>
          <p className="mt-4 text-muted-foreground">Choose from a range of loan products designed to support your goals.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div key={s.title} className="group relative p-6 rounded-xl border border-border bg-card hover:border-emerald hover:shadow-card transition-all duration-300">
              <div className="size-12 rounded-lg bg-emerald/10 grid place-items-center mb-5 group-hover:bg-emerald transition-colors">
                <s.icon className="size-6 text-emerald group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold text-navy text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
