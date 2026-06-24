import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919142543546"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 size-14 rounded-full bg-emerald text-white grid place-items-center shadow-glow hover:scale-105 transition-transform animate-float"
    >
      <MessageCircle className="size-7" />
      <span className="absolute inset-0 rounded-full bg-emerald animate-ping opacity-20" />
    </a>
  );
}
