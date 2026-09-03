import { Phone, MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

/*
  Most bookings here start with a phone call, often made by someone's son or
  daughter on a small screen. On mobile the two ways to reach us stay
  pinned to the bottom of the viewport rather than making people scroll for
  them. Hidden on desktop, where the header already carries the number.
*/

export default function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-2 gap-2 p-2.5">
        <a
          href={business.phoneTel}
          className="inline-flex items-center justify-center gap-2 rounded-pill bg-accent px-4 py-3 text-[15px] font-semibold text-on-accent active:translate-y-px"
        >
          <Phone size={17} strokeWidth={1.5} aria-hidden="true" />
          Call
        </a>
        <a
          href={whatsappLink(whatsappMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-pill border border-line bg-surface-3 px-4 py-3 text-[15px] font-semibold text-text active:translate-y-px"
        >
          <MessageCircle size={17} strokeWidth={1.5} aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
