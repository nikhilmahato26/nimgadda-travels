"use client";

import { useState } from "react";
import Image from "next/image";
import { business } from "@/data/business";

/*
  The room page's main gallery: one big photo with a row of thumbnails below
  it that swap the main photo when clicked. Degrades by photo count rather
  than branching at each call site:

    0 photos  -> the typographic placeholder, no thumbnail row
    1 photo   -> just the photo, no thumbnail row (nothing to switch to)
    2+ photos -> photo plus thumbnails, first one active on load
*/
export default function RoomHeroGallery({ images, name }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 rounded-card border border-line bg-surface-2 p-8 text-center">
        <span className="font-display text-2xl font-extrabold tracking-tight text-accent-ink">
          {name}
        </span>
        <span className="text-[14px] text-muted">
          Photographs coming shortly
        </span>
      </div>
    );
  }

  return (
    <div>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-card border border-line bg-surface-2">
        <Image
          src={images[index]}
          alt={`${name} at ${business.name}, photo ${index + 1} of ${images.length}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 62vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 ? (
        <div className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-6">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1} of ${images.length}`}
              aria-current={i === index}
              className={`relative aspect-square overflow-hidden rounded-card ${
                i === index
                  ? "outline-2 outline-offset-2 outline-accent-ink"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
