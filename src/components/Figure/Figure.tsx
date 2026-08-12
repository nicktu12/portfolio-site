import { useEffect, useRef, useState } from 'react'
import type { ImageAsset } from '../../content/types'
import styles from './Figure.module.css'

interface FigureProps {
  image: ImageAsset
  sizes: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'auto'
  className?: string
}

function Figure({ image, sizes, loading = 'lazy', fetchPriority = 'auto', className }: FigureProps) {
  const imgRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(loading === 'eager')

  useEffect(() => {
    // Images served from cache can already be complete before this effect
    // runs, in which case onLoad never fires.
    if (imgRef.current?.complete) {
      setLoaded(true)
    }
  }, [])

  const base = `/media/${image.slug}`
  const largest = image.widths[image.widths.length - 1]

  const avifSrcSet = image.widths.map((w) => `${base}-${w}.avif ${w}w`).join(', ')
  const webpSrcSet = image.widths.map((w) => `${base}-${w}.webp ${w}w`).join(', ')

  return (
    <picture className={className}>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        ref={imgRef}
        src={`${base}-${largest}.jpg`}
        width={image.intrinsic.w}
        height={image.intrinsic.h}
        alt={image.alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        onLoad={() => setLoaded(true)}
        className={loaded ? styles.loaded : styles.loading}
      />
    </picture>
  )
}

export default Figure
