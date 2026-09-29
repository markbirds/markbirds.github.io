#!/usr/bin/env bash
# Converts every PNG under public/projects to WebP and deletes the PNG; see AGENTS.md "Images".
set -euo pipefail
cd "$(dirname "$0")/.."

command -v cwebp >/dev/null || { echo "cwebp not found: brew install webp" >&2; exit 1; }

# find, not a ** glob, because the macOS system bash is 3.2.
find public/projects -name '*.png' -print0 | while IFS= read -r -d '' png; do
  base="${png%.png}"
  case "$png" in
    *-architecture.png)
      # Lossless: lossy WebP rings around the thin strokes and small labels.
      cwebp -quiet -m 6 -metadata none -lossless -z 9 "$png" -o "$base.webp" ;;
    *)
      # Full resolution for the lightbox, plus the 960px copy the cards and /apps load.
      cwebp -quiet -m 6 -sharp_yuv -metadata none -q 88 "$png" -o "$base.webp"
      cwebp -quiet -m 6 -sharp_yuv -metadata none -q 82 -resize 960 0 "$png" -o "$base-card.webp" ;;
  esac
  rm "$png"
  echo "converted ${png#public/}"
done
