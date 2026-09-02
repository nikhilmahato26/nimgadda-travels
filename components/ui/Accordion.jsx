import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/*
  Native <details>/<summary>, so it opens without JavaScript and is keyboard
  operable for free. The marker rotates via the open state, no client bundle.
*/

export function AccordionItem({ title, children, defaultOpen = false, className }) {
  return (
    <details
      open={defaultOpen}
      className={cn(
        "group rounded-card border border-line bg-surface-3 px-5 py-4 open:pb-5",
        className
      )}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
        <span className="font-display text-[16px] font-extrabold tracking-tight">
          {title}
        </span>
        <span
          aria-hidden="true"
          className="grid size-7 shrink-0 place-items-center rounded-pill border border-line transition-transform duration-200 group-open:rotate-45"
        >
          <Plus size={15} strokeWidth={2} />
        </span>
      </summary>
      <div className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-muted">
        {children}
      </div>
    </details>
  );
}
