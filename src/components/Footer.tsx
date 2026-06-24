import { Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-x py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="size-9 rounded-lg bg-emerald grid place-items-center">
              <span className="text-navy font-display font-bold text-lg">V</span>
            </div>
            <div className="font-display font-bold text-white text-lg">Vridhi Credit</div>
          </div>
          <p className="text-sm leading-relaxed text-white/60">Helping individuals and businesses access the right financial support.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-emerald transition-colors">Loan Against Property</a></li>
            <li><a href="#services" className="hover:text-emerald transition-colors">Business Loan</a></li>
            <li><a href="#services" className="hover:text-emerald transition-colors">Education Loan</a></li>
            <li><a href="#services" className="hover:text-emerald transition-colors">Personal Loan</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:+919142543546" className="flex items-center gap-2 hover:text-emerald transition-colors">
                <Phone className="size-4" /> +91 91425 43546
              </a>
            </li>
            <li>
              <a href="https://wa.me/919142543546" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-emerald transition-colors">
                <MessageCircle className="size-4" /> WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-center text-xs text-white/50">
          © 2026 Vridhi Credit. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
