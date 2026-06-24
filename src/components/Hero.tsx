import { ArrowRight, MessageCircle, Phone, ShieldCheck, TrendingUp, IndianRupee, Building2, Wallet } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-muted to-white">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-12 pb-20 md:pt-20 md:pb-28">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald/10 text-emerald-dark text-xs font-semibold mb-6">
            <ShieldCheck className="size-3.5" /> Trusted Loan Partner
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.05]">
            Fast & Reliable <span className="text-emerald">Loan Solutions</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Helping individuals and businesses access the right financial support through a simple and transparent process.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Apply Now <ArrowRight className="size-4" />
            </a>
            <a href="https://wa.me/919142543546" target="_blank" rel="noreferrer" className="btn-secondary">
              <MessageCircle className="size-4" /> WhatsApp Us
            </a>
          </div>

          <a href="tel:+919142543546" className="mt-8 inline-flex items-center gap-3 group">
            <div className="size-12 rounded-xl bg-navy grid place-items-center group-hover:bg-emerald transition-colors">
              <Phone className="size-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Call us today</div>
              <div className="font-display font-bold text-navy text-lg">+91 91425 43546</div>
            </div>
          </a>
        </div>

        <div className="relative aspect-square max-w-lg mx-auto w-full">
          {/* Decorative blurred blobs */}
          <div className="absolute -top-8 -left-8 size-64 rounded-full bg-emerald/20 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 size-64 rounded-full bg-gold/20 blur-3xl" />

          {/* Main rotated card */}
          <div className="absolute inset-6 rounded-3xl bg-gradient-to-br from-navy to-navy-light shadow-card rotate-6 overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 0%, transparent 40%)" }} />
            <div className="absolute top-6 right-6 text-white/15 font-display font-black text-[10rem] leading-none select-none">₹</div>
          </div>

          {/* Front rupee card */}
          <div className="absolute inset-6 rounded-3xl bg-white border border-border shadow-card -rotate-3 p-7 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Loan Solutions</div>
                <div className="font-display font-bold text-navy text-2xl mt-1">Grow with Vridhi</div>
              </div>
              <div className="size-12 rounded-xl bg-emerald grid place-items-center shadow-glow">
                <IndianRupee className="size-6 text-white" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Building2, label: "Property" },
                { icon: Wallet, label: "Personal" },
                { icon: TrendingUp, label: "Business" },
                { icon: ShieldCheck, label: "Trusted" },
              ].map((i) => (
                <div key={i.label} className="flex items-center gap-2 p-2.5 rounded-lg bg-muted">
                  <div className="size-8 rounded-md bg-white grid place-items-center">
                    <i.icon className="size-4 text-emerald" />
                  </div>
                  <span className="text-xs font-semibold text-navy">{i.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating currency symbols */}
          <div className="absolute -top-2 right-8 size-16 rounded-2xl bg-gold text-navy font-display font-black text-3xl grid place-items-center shadow-card animate-float">₹</div>
          <div className="absolute bottom-4 -left-2 size-14 rounded-2xl bg-emerald text-white font-display font-black text-2xl grid place-items-center shadow-glow animate-float" style={{ animationDelay: "1s" }}>$</div>
          <div className="absolute top-1/3 -right-3 size-12 rounded-xl bg-white border border-border text-navy font-display font-black text-xl grid place-items-center shadow-soft animate-float" style={{ animationDelay: "2s" }}>€</div>

          {/* Bottom badge */}
          <div className="absolute -bottom-4 left-4 bg-white rounded-xl p-3 shadow-card hidden sm:flex items-center gap-3 max-w-xs border border-border">
            <div className="size-9 rounded-lg bg-gold/15 grid place-items-center">
              <ShieldCheck className="size-4 text-gold" />
            </div>
            <div>
              <div className="font-semibold text-navy text-xs">Transparent Process</div>
              <div className="text-[10px] text-muted-foreground">No hidden charges</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
