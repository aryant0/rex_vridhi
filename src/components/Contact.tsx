import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-pad bg-muted">
      <div className="container-x grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="text-xs font-semibold text-emerald uppercase tracking-widest mb-3">Contact Us</div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Let's discuss your loan needs</h2>
          <p className="mt-4 text-muted-foreground">Reach out and our team will get back to you promptly.</p>

          <div className="mt-8 space-y-4">
            <a href="tel:+919142543546" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border hover:border-emerald transition-colors">
              <div className="size-11 rounded-lg bg-emerald/10 grid place-items-center">
                <Phone className="size-5 text-emerald" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Phone</div>
                <div className="font-semibold text-navy">+91 91425 43546</div>
              </div>
            </a>
            <a href="https://wa.me/919142543546" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border hover:border-emerald transition-colors">
              <div className="size-11 rounded-lg bg-emerald/10 grid place-items-center">
                <MessageCircle className="size-5 text-emerald" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</div>
                <div className="font-semibold text-navy">+91 91425 43546</div>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 bg-white p-6 md:p-8 rounded-2xl border border-border shadow-soft space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" type="text" required />
            <Field label="Phone Number" name="phone" type="tel" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy mb-1.5">Loan Type</label>
            <select required name="loanType" className="w-full px-4 py-3 rounded-lg border border-border bg-white text-navy focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition">
              <option value="">Select loan type</option>
              <option>Loan Against Property</option>
              <option>Business Loan</option>
              <option>Education Loan</option>
              <option>Personal Loan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy mb-1.5">Message</label>
            <textarea required name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-white text-navy focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition resize-none" placeholder="Tell us about your requirement..." />
          </div>
          <button type="submit" className="btn-primary w-full sm:w-auto">
            {sent ? <><CheckCircle2 className="size-4" /> Request sent</> : <>Request Callback <Send className="size-4" /></>}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-1.5">{label}</label>
      <input required={required} name={name} type={type} className="w-full px-4 py-3 rounded-lg border border-border bg-white text-navy focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition" />
    </div>
  );
}
