"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { business } from "@/data/business";
import { BrandLockup } from "./BrandMark";
import { cn } from "@/lib/utils";

/*
  On the home page the bar floats over the hero photograph, so the logo and the
  link group each sit in their own white pill for legibility against the image.
  On every other route there is no photograph behind it, so it becomes a normal
  sticky bar on the page surface.
*/

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const overHero = pathname === "/";

  return (
    <header
      className={cn(
        "z-40 w-full",
        overHero
          ? "absolute inset-x-0 top-0"
          : "sticky top-0 border-b border-line bg-surface/90 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          aria-label={`${business.name}, home`}
          className={cn(
            "rounded-pill",
            overHero && "bg-surface px-4 py-2 shadow-[var(--shadow-card)]"
          )}
        >
          <BrandLockup />
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-1 rounded-pill lg:flex",
            overHero && "bg-surface px-2 py-1.5 shadow-[var(--shadow-card)]"
          )}
        >
          {business.nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-pill px-4 py-2 text-[15px] font-medium transition-colors",
                  active
                    ? "bg-accent text-on-accent"
                    : "text-muted hover:bg-surface-2 hover:text-text"
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
            className="hidden items-center gap-2 rounded-pill bg-accent px-5 py-2.5 text-[14px] font-bold text-on-accent transition-all hover:brightness-95 active:translate-y-px sm:inline-flex"
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-pill bg-surface text-text shadow-[var(--shadow-card)] lg:hidden"
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
          className="mx-5 mb-4 rounded-card bg-surface p-3 shadow-[var(--shadow-float)] sm:mx-8 lg:hidden"
        >
          {business.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-pill px-4 py-3 text-[17px] font-medium text-text hover:bg-surface-2"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={business.phoneTel}
            className="mt-2 flex items-center justify-center gap-2 rounded-pill bg-accent px-4 py-3 font-bold text-on-accent"
          >
            <Phone size={17} strokeWidth={1.5} aria-hidden="true" />
            {business.phoneDisplay}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
