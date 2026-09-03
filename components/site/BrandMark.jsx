import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandMark({ className }) {
  return (
    <Image
      src="/images/logo-mark.png"
      alt="Nimmagadda Vari Andhra Tours and Travels emblem"
      width={40}
      height={40}
      className={cn("h-9 w-9 shrink-0 rounded-full object-cover shadow-xs ring-1 ring-black/5", className)}
      priority
    />
  );
}

export function BrandLockup({ className }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <BrandMark />
      <span className="leading-tight">
        <span className="block font-display text-[15px] font-extrabold tracking-tight text-text">
          Nimmagadda Vari
        </span>
        <span className="block text-[11px] font-medium text-muted">
          Andhra Tours &amp; Travels
        </span>
      </span>
    </span>
  );
}
