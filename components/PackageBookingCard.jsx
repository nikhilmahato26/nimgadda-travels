"use client";

import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import { packageGroupSize } from "@/data/packages";
import { rupees } from "@/lib/utils";

/*
  The sidebar an industry package page fills with a cart summary and a
  "Book now" checkout button. There is no checkout here, so this keeps the
  shape (a real price, a computed subtotal, one primary action) but the
  action composes a WhatsApp message instead of a payment flow.

  The estimate is real arithmetic on a real disclosed rate, not an invented
  number, and is labelled "estimated" rather than "total" since the final
  figure is always confirmed on the call.
*/
export default function PackageBookingCard({ packageName, pricePerPerson }) {
  const [travellers, setTravellers] = useState("");
  const [arrival, setArrival] = useState("");

  const count = Number(travellers);
  const estimate =
    Number.isFinite(count) && count > 0 ? count * pricePerPerson : null;

  function buildMessage() {
    const parts = [
      `Namaste, I would like to book the ${packageName} package at ${business.shortName} in Kasi.`,
    ];
    if (travellers) parts.push(`${travellers} people travelling.`);
    if (arrival) parts.push(`Arriving around ${arrival}.`);
    return parts.join(" ");
  }

  const href = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    buildMessage()
  )}`;

  return (
    <div className="rounded-card border border-line bg-surface-3 p-6 shadow-[var(--shadow-card)]">
      <p>
        <span className="font-display text-3xl font-extrabold tracking-tight">
          {rupees(pricePerPerson)}
        </span>
        <span className="ml-1 text-[14px] font-medium text-muted">
          per person
        </span>
      </p>
      <p className="mt-1 text-[13px] text-muted">
        All taxes included. Special darshan tickets are extra.
      </p>

      <div className="mt-5 grid gap-3 border-t border-line pt-5">
        <Field
          id="pkg-travellers"
          label="People travelling"
          type="number"
          min={packageGroupSize.min}
          max={packageGroupSize.max}
          placeholder="Add travellers"
          hint={`Groups of ${packageGroupSize.min} to ${packageGroupSize.max}`}
          value={travellers}
          onChange={setTravellers}
        />
        <Field
          id="pkg-arrival"
          label="Arrival, if you know it"
          type="date"
          value={arrival}
          onChange={setArrival}
        />
      </div>

      {estimate ? (
        <div className="mt-4 flex items-center justify-between rounded-card bg-surface-2 px-4 py-3">
          <span className="text-[14px] font-medium text-muted">
            Estimated for {travellers}
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">
            {rupees(estimate)}
          </span>
        </div>
      ) : null}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-pill bg-accent px-6 py-3 text-[15px] font-bold text-on-accent transition-all hover:brightness-95 active:translate-y-px"
      >
        <MessageCircle size={16} strokeWidth={2} aria-hidden="true" />
        Check on WhatsApp
      </a>

      <a
        href={business.phoneTel}
        className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-pill border border-line px-6 py-3 text-[15px] font-semibold text-text transition-colors hover:border-ink"
      >
        <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
        {business.phoneDisplay}
      </a>

      <p className="mt-4 text-[12px] leading-relaxed text-muted">
        No payment happens online. The trip is confirmed on the call.
      </p>
    </div>
  );
}

function Field({ id, label, value, onChange, hint, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[13px] font-semibold text-text">
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-describedby={hint ? `${id}-hint` : undefined}
        className="h-11 rounded-pill border border-line bg-surface px-4 text-[15px] text-text placeholder:text-muted"
        {...props}
      />
      {hint ? (
        <p id={`${id}-hint`} className="text-[12px] text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
