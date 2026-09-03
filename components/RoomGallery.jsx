"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { business } from "@/data/business";

/*
  Drop-in replacement for a plain <Image fill>: give it a `relative`,
  correctly-sized parent and it fills it. Handles all three states a room can
  be in without the caller branching:

    0 photos  -> the existing typographic placeholder
    1 photo   -> a plain image, no controls
    2+ photos -> a crossfade slider with arrows and dots

  This is the only gallery component every room card and list row uses, so a
  room goes from placeholder to single photo to full slider automatically as
  data/rooms.js gains images - nothing else in the app changes.
*/
export default function RoomGallery({ images, name, sizes, priority = false }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-8 text-center">
        <span className="font-display text-2xl font-extrabold tracking-tight text-accent-ink">
          {name}
        </span>
        <span className="text-[14px] text-muted">
          Photographs coming shortly
        </span>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <Image
        src={images[0]}
        alt={`${name} at ${business.name}`}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    );
  }

  const go = (delta) =>
    setIndex((i) => (i + delta + images.length) % images.length);

  return (
    <div className="relative h-full w-full">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${name} at ${business.name}, photo ${i + 1} of ${images.length}`}
          fill
          priority={priority && i === 0}
          sizes={sizes}
          className="object-cover transition-opacity duration-500"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}

      <p className="sr-only" role="status" aria-live="polite">
        Photo {index + 1} of {images.length}
      </p>

      {/* Arrows sit at partial opacity always (so touch screens, which have
          no hover state, can still see and reach them) and come to full
          opacity on hover or focus for pointer users. */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-pill bg-surface/90 p-2 text-text opacity-70 shadow-[var(--shadow-card)] transition-opacity hover:opacity-100 focus-visible:opacity-100"
      >
        <ChevronLeft size={18} strokeWidth={2} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-pill bg-surface/90 p-2 text-text opacity-70 shadow-[var(--shadow-card)] transition-opacity hover:opacity-100 focus-visible:opacity-100"
      >
        <ChevronRight size={18} strokeWidth={2} aria-hidden="true" />
      </button>

      <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === index}
            className="rounded-pill p-1"
          >
            <span
              className="block h-1.5 w-1.5 rounded-pill bg-surface transition-[width]"
              style={{
                width: i === index ? "1.125rem" : "0.375rem",
                opacity: i === index ? 1 : 0.55,
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
