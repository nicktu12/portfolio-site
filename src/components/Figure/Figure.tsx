import type { ImageAsset } from '../../content/types'

interface FigureProps {
  image: ImageAsset
  sizes: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'auto'
  className?: string
}

function Figure({ image, sizes, loading = 'lazy', fetchPriority = 'auto', className }: FigureProps) {
  const base = `/media/${image.slug}`
  const largest = image.widths[image.widths.length - 1]

  const avifSrcSet = image.widths.map((w) => `${base}-${w}.avif ${w}w`).join(', ')
  const webpSrcSet = image.widths.map((w) => `${base}-${w}.webp ${w}w`).join(', ')

  return (
    <picture className={className}>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={`${base}-${largest}.jpg`}
        width={image.intrinsic.w}
        height={image.intrinsic.h}
        alt={image.alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
      />
    </picture>
  )
}

export default Figure
