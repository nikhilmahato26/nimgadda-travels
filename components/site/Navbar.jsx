"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { business } from "@/data/business";
import { BrandLockup } from "./BrandMark";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur-md">
      {/* Desktop bar stays on one line at 68px. */}
      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" aria-label="Nimmagadda Vari Charitable Trust, home">
          <BrandLockup />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {business.nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[15px] font-medium transition-colors",
                  active ? "text-accent-ink" : "text-muted hover:text-text"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={business.phoneTel}
            className="hidden items-center gap-2 rounded-control bg-brand px-4 py-2.5 text-[14px] font-semibold text-on-brand transition-opacity hover:opacity-90 active:translate-y-px sm:inline-flex"
          >
            <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
            {business.phoneDisplay}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-control border border-line text-text lg:hidden"
          >
            {open ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-surface px-5 pb-5 pt-2 lg:hidden"
        >
          {business.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3.5 text-[17px] font-medium text-text last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={business.phoneTel}
            className="mt-4 flex items-center justify-center gap-2 rounded-control bg-brand px-4 py-3 font-semibold text-on-brand"
          >
            <Phone size={17} strokeWidth={1.5} aria-hidden="true" />
            {business.phoneDisplay}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
