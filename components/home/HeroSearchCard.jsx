"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { business } from "@/data/business";
import { cn } from "@/lib/utils";

/*
  The reference puts a property-search card in the hero. A search box that
  searches nothing would be a fake control, so this one composes a WhatsApp
  message from what you pick and opens a chat with us. That is how most
  enquiries here actually arrive, and the button does exactly what it says.
*/

const TABS = [
  { id: "rooms", label: "Rooms" },
  { id: "package", label: "Yatra package" },
  { id: "vehicle", label: "Vehicle" },
];

// The chip row changes with the tab, so it always offers a relevant choice.
const CHOICES = {
  rooms: ["AC Room", "Deluxe", "Super Deluxe"],
  package: ["Grand Yatra", "Kasi Yatra", "Prayag, Ayodhya and Gaya"],
  vehicle: ["Car", "Tempo Traveller", "Bus"],
};

const CHOICE_LABEL = {
  rooms: "Room",
  package: "Package",
  vehicle: "Type",
};

export default function HeroSearchCard() {
  const [tab, setTab] = useState("rooms");
  const [choice, setChoice] = useState(null);
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState("");

  function buildMessage() {
    const what = TABS.find((t) => t.id === tab)?.label.toLowerCase() ?? "a stay";
    const parts = [
      `Namaste, I would like to enquire about ${what} at ${business.shortName} in Kasi.`,
    ];
    if (choice) parts.push(`${CHOICE_LABEL[tab]}: ${choice}.`);
    if (arrival) parts.push(`Arriving ${arrival}.`);
    if (departure) parts.push(`Leaving ${departure}.`);
    if (guests) parts.push(`${guests} people travelling.`);
    return parts.join(" ");
  }

  const href = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    buildMessage()
  )}`;

  return (
    <div className="rounded-card bg-surface p-5 shadow-[var(--shadow-float)] sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-display text-lg font-extrabold tracking-tight">
          Tell us what you need
        </h2>

        <div
          role="tablist"
          aria-label="What are you enquiring about"
          className="flex flex-wrap gap-1 rounded-pill bg-surface-2 p-1"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={tab === t.id}
              onClick={() => {
                setTab(t.id);
                setChoice(null);
              }}
              className={cn(
                "rounded-pill px-4 py-1.5 text-[14px] font-semibold transition-colors",
                tab === t.id
                  ? "bg-surface text-text shadow-[var(--shadow-card)]"
                  : "text-muted hover:text-text"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 border-t border-line pt-5 sm:grid-cols-3">
        <Field
          id="hero-arrival"
          label="Arrival"
          type="date"
          value={arrival}
          onChange={setArrival}
        />
        <Field
          id="hero-departure"
          label="Departure"
          type="date"
          value={departure}
          onChange={setDeparture}
        />
        <Field
          id="hero-guests"
          label="People travelling"
          type="number"
          min="1"
          placeholder="Add guests"
          value={guests}
          onChange={setGuests}
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-line pt-5">
        <span className="text-[13px] font-semibold text-muted">
          {CHOICE_LABEL[tab]}:
        </span>
        {CHOICES[tab].map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={choice === c}
            onClick={() => setChoice(choice === c ? null : c)}
            className={cn(
              "rounded-pill border px-4 py-1.5 text-[14px] font-medium transition-colors",
              choice === c
                ? "border-ink bg-ink text-on-ink"
                : "border-line bg-surface text-muted hover:border-ink hover:text-text"
            )}
          >
            {c}
          </button>
        ))}

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-2 rounded-pill bg-accent px-6 py-3 text-[15px] font-bold text-on-accent transition-all hover:brightness-95 active:translate-y-px"
        >
          <Search size={16} strokeWidth={2} aria-hidden="true" />
          Check availability
        </a>
      </div>
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
