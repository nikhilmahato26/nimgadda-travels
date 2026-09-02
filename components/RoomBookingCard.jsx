"use client";

import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { business } from "@/data/business";

/*
  The sticky sidebar the reference hotel template fills with a nightly rate,
  a date picker and a "Continue" button that starts a payment flow. None of
  that exists here: the trust has never quoted a nightly rate (only per
  person package prices), and there is no online payment step at all. So
  this keeps the shape (dates, guest count, one primary action) but the
  action composes a WhatsApp message instead of a fake checkout, which is
  what actually happens when someone books this room.
*/
export default function RoomBookingCard({ roomName }) {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState("");

  function buildMessage() {
    const parts = [
      `Namaste, I would like to book the ${roomName} at ${business.shortName} in Kasi.`,
    ];
    if (arrival) parts.push(`Arriving ${arrival}.`);
    if (departure) parts.push(`Leaving ${departure}.`);
    if (guests) parts.push(`${guests} people travelling.`);
    return parts.join(" ");
  }

  const href = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    buildMessage()
  )}`;

  return (
    <div className="rounded-card border border-line bg-surface-3 p-6 shadow-[var(--shadow-card)]">
      <p className="font-display text-xl font-extrabold tracking-tight">
        Rates on request
      </p>
      <p className="mt-1 text-[13px] text-muted">
        Rates change with the season and length of stay, so we quote on the
        phone.
      </p>

      <div className="mt-5 grid gap-3 border-t border-line pt-5">
        <Field
          id="room-arrival"
          label="Arrival"
          type="date"
          value={arrival}
          onChange={setArrival}
        />
        <Field
          id="room-departure"
          label="Departure"
          type="date"
          value={departure}
          onChange={setDeparture}
        />
        <Field
          id="room-guests"
          label="People travelling"
          type="number"
          min="1"
          placeholder="Add guests"
          value={guests}
          onChange={setGuests}
        />
      </div>

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
        No payment happens online. The room is held once you confirm on the
        call.
      </p>
    </div>
  );
}

function Field({ id, label, value, onChange, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[13px] font-semibold text-text">
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-pill border border-line bg-surface px-4 text-[15px] text-text placeholder:text-muted"
        {...props}
      />
    </div>
  );
}
