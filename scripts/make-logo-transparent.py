#!/usr/bin/env python3
"""
Removes the flat background card from a logo image, leaving transparent
alpha where the background was. Written for logo-mark.png specifically: the
client's artwork is gold linework on a solid cream card, and at the small
size it renders at in the navbar (~36px), gold-on-cream reads as barely more
than a blank circle - there isn't enough contrast to separate the linework
from its own backing at that scale. A transparent version lets the site give
it real contrast instead (see components/site/BrandMark.jsx, which composites
this onto --ink, the site's dark token).

This is a one-off asset tool, not part of the app or its build. It needs
Pillow, which is not an npm dependency of this project:

    pip install pillow
    python3 scripts/make-logo-transparent.py

Re-run it if the client sends a new version of the mark with the same kind of
flat-card background. Adjust SOURCE / OUTPUT / the two threshold constants if
the new artwork's background colour or edge softness differs.
"""

import math
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "public/images/logo-mark.png"
OUTPUT = ROOT / "public/images/logo-mark-transparent.png"

# Pixels within T_LOW of the background colour become fully transparent,
# pixels beyond T_HIGH stay fully opaque, and the band between is a smooth
# alpha ramp so edges anti-alias instead of coming out jagged.
T_LOW = 14
T_HIGH = 55


def main():
    im = Image.open(SOURCE).convert("RGB")
    w, h = im.size

    # Sample the background from a corner rather than hardcoding a colour,
    # so this keeps working if a future logo uses a different card colour.
    bg = im.getpixel((0, 0))

    out = Image.new("RGBA", (w, h))
    src = im.load()
    dst = out.load()

    for y in range(h):
        for x in range(w):
            r, g, b = src[x, y]
            d = math.sqrt((r - bg[0]) ** 2 + (g - bg[1]) ** 2 + (b - bg[2]) ** 2)
            if d <= T_LOW:
                a = 0
            elif d >= T_HIGH:
                a = 255
            else:
                a = round(255 * (d - T_LOW) / (T_HIGH - T_LOW))
            dst[x, y] = (r, g, b, a)

    out.save(OUTPUT)
    print(f"Wrote {OUTPUT.relative_to(ROOT)} ({w}x{h}), background sampled at {bg}")


if __name__ == "__main__":
    main()
