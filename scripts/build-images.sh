#!/usr/bin/env bash
# Processes raw-assets/ into public/media/ as avif/webp/jpg at fixed widths.
# Hand-run, not part of CI: there are ~10 images that change a few times a
# year, so a build-time image plugin isn't worth the dependency weight.
#
# Requires: sips (macOS built-in), cwebp, avifenc, avifdec, exiftool
#   brew install webp libavif exiftool
#
# Usage: scripts/build-images.sh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RAW_DIR="$ROOT_DIR/raw-assets"
OUT_DIR="$ROOT_DIR/public/media"
WIDTHS=(800 1440 2200)

mkdir -p "$OUT_DIR"

process_image() {
  local src="$1"
  local slug="$2"
  local native_width="$3"
  local tmp_png="$OUT_DIR/.tmp-${slug}.png"

  # Normalize to PNG working copy (sips can't read avif; it can write jpeg
  # from PNG source directly).
  case "$src" in
    *.avif)
      avifdec "$src" "$tmp_png" >/dev/null
      ;;
    *.png)
      cp "$src" "$tmp_png"
      ;;
    *)
      echo "skip: unhandled source type for $src" >&2
      return
      ;;
  esac

  for width in "${WIDTHS[@]}"; do
    if [ "$width" -gt "$native_width" ]; then
      continue
    fi

    local jpg_out="$OUT_DIR/${slug}-${width}.jpg"
    local webp_out="$OUT_DIR/${slug}-${width}.webp"
    local avif_out="$OUT_DIR/${slug}-${width}.avif"

    sips -Z "$width" --setProperty format jpeg --setProperty formatOptions 82 \
      "$tmp_png" --out "$jpg_out" >/dev/null

    cwebp -quiet -q 80 -metadata none "$jpg_out" -o "$webp_out"

    avifenc -q 60 --speed 6 "$jpg_out" "$avif_out" >/dev/null

    exiftool -all= -overwrite_original "$jpg_out" >/dev/null

    echo "wrote ${slug}-${width}.{jpg,webp,avif}"
  done

  rm -f "$tmp_png"
}

process_image "$RAW_DIR/zylo/zylo-ai-cost-hero.avif" "zylo-ai-cost-hero" 1826
process_image "$RAW_DIR/zylo/zylo-actual-vs-forecast.avif" "zylo-actual-vs-forecast" 1420
process_image "$RAW_DIR/zylo/zylo-forecast-chart.avif" "zylo-forecast-chart" 1420
process_image "$RAW_DIR/zylo/zylo-ops-table.avif" "zylo-ops-table" 1420
process_image "$RAW_DIR/zylo/zylo-commitment.avif" "zylo-commitment" 2880
process_image "$RAW_DIR/stackhawk/stackhawk-app-list.png" "stackhawk-app-list" 2744

echo ""
echo "done. sizes:"
ls -lh "$OUT_DIR" | grep -v '^total' | grep -v '^d'
